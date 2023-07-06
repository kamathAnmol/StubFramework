/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import Card from "../card/Card";
// import 'react-multi-email/style.css';
// import Button from 'react-bootstrap';
import ReactFileReader from "react-file-reader";
import {Table} from "react-bootstrap";
import {TiTick} from "react-icons/ti";
import {MdClose} from "react-icons/md";

const styles = {
  iconStyle: {
    cursor: "pointer",
  },
  rowStyle: {
    margin: "5px",
    padding: "5px",
    cursor: "pointer",
    fontSize: "15px",
    borderBottom: "1px solid grey",
  },
  searchDisabled: {
    pointerEvents: "none",
  },

  selectBoxStyle: {
    /* font-weight: bold !important; */
    color: "grey",
    border: "1px solid rgba(0, 0, 0, 0.05)",
    /* text-transform: uppercase; */
    background: "transparent",
    padding: "8px 8px",
    cursor: "pointer",
    margin: "2px",
  },
};
const SearchByFile = (props) => {
  const [file, setFile] = useState(null);
  const [emails, setEmails] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [noMatchData, setNoMatchData] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(props.db ? props.db : []);
  const [checkCount, setCheckCount] = useState(0);
  const [checkboxValid, setCheckboxValid] = useState(false);

  const componentWillReceiveProps = (newProps) => {
    if (newProps.db) {
      setData(newProps.db);
      setTimeout(() => {}, 50);
    }
  };

  const search = () => {
    setFilteredData([]);
    setNoMatchData([]);
    for (let i of file) {
      let data = data;
      if (i && i.email) {
        let filter = i.email;
        const lowercasedFilter = filter.toLowerCase();
        let filteredObj = data.filter((item) => {
          return Object.keys(item).some((key) => {
            if (item[key].constructor === String) {
              if (item[key].toLowerCase().includes(lowercasedFilter)) {
                item.present = true;
                return true;
              }
            }
          });
        });

        setTimeout(() => {
          if (filteredObj[0] != undefined) {
            let temp = data;
            for (let k of temp) {
              k.present = true;
            }
            setData(temp);
            setClicked(true);
          } else {
            i.present = false;
            setData([...data, i]);
            setClicked(true);
          }
        }, 50);
      }
    }
  };

  const handleFiles = (files) => {
    var reader = new FileReader();
    reader.onload = (e) => {
      // Use reader.result
      var csv = reader.result;
      var lines = csv.split("\n");
      var result = [];
      var headers = lines[0].split(",");
      for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentline = lines[i].split(",");
        for (var j = 0; j < headers.length; j++) {
          obj[headers[j]] = currentline[j];
        }
        result.push(obj);
      }
      setFile(result);
      search();
    };
    reader.readAsText(files[0]);
  };

  const addUsersToSelected = (item, index, e) => {
    if (e.target.checked) {
      setCheckCount(checkCount + 1);
      setCheckboxValid(true);
    } else {
      setCheckCount(checkCount - 1);
      if (checkCount === 0) {
        setCheckboxValid(false);
      }
    }
    item.selected = e.target.checked;
    let temp = data;
    temp[index] = item;
    setData(temp);
  };
  const addAllUsersToSelected = (e) => {
    if (e.target.checked) {
      setCheckCount(checkCount + 1);
      setCheckboxValid(true);
    } else {
      setCheckCount(checkCount - 1);
      if (checkCount === 0) {
        setCheckboxValid(false);
      }
    }
    let temp = data;
    for (let item of temp) {
      item.selected = e.target.checked;
    }
    setData(temp);
  };
  const generateFinalList = () => {
    setClicked(false);
    let newdata = data.filter((item) => {
      return item.selected;
    });
    props.finalData(newdata);
  };

  return (
    <div>
      <ReactFileReader handleFiles={handleFiles} fileTypes={".csv"}>
        <button className="btn">Upload CSV</button>
      </ReactFileReader>

      {clicked && (
        <div>
          <hr />
          <label>Results</label>
          <Card
            content={
              <div>
                {data.length != 0 && (
                  <Table className="patronTable" striped bordered hover>
                    <thead>
                      <tr className="text-center" style={styles.rowStyle}>
                        <th>
                          {" "}
                          <input
                            type="checkbox"
                            onChange={addAllUsersToSelected}
                          />
                        </th>
                        <th> Name</th>
                        <th> Display Picture</th>
                        <th> Designation</th>
                        <th> Organization</th>
                        <th> Expertise</th>
                        <th>
                          {" "}
                          #Pursuits{" "}
                          {user == "steward" ? "Stewarded" : "Patronized"}
                        </th>
                        <th> Rating</th>
                        <th> Already Present in the Domain</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, index) => (
                        <tr
                          key={index}
                          style={styles.rowStyle}
                          className="cell-tr"
                        >
                          <td
                            className={
                              item.presentinDomain == "TRUE"
                                ? "nonMember"
                                : "cell-dt"
                            }
                          >
                            {" "}
                            <input
                              type="checkbox"
                              checked={item.selected}
                              onChange={addUsersToSelected.bind(
                                this,
                                item,
                                index
                              )}
                            />
                          </td>
                          <td
                            className={
                              item.presentinDomain == "TRUE"
                                ? "nonMember"
                                : "cell-dt"
                            }
                          >
                            {" "}
                            {item.fullname}
                          </td>
                          <td
                            className={
                              item.presentinDomain == "TRUE"
                                ? "nonMember"
                                : "cell-dt"
                            }
                          >
                            {" "}
                            {item.presentinDomain == "TRUE" ? (
                              <img
                                src={
                                  "data:image/png;base64," + item.displaypicture
                                }
                                width="100%"
                              />
                            ) : null}{" "}
                          </td>
                          <td
                            className={
                              item.presentinDomain == "TRUE"
                                ? "nonMember"
                                : "cell-dt"
                            }
                          >
                            {" "}
                            {item.presentinDomain == "TRUE"
                              ? item.designation
                              : null}
                          </td>
                          <td
                            className={
                              item.presentinDomain == "TRUE"
                                ? "nonMember"
                                : "cell-dt"
                            }
                          >
                            {" "}
                            {item.presentinDomain == "TRUE"
                              ? item.organization
                              : null}
                          </td>
                          <td
                            className={
                              item.presentinDomain == "TRUE"
                                ? "nonMember"
                                : "cell-dt"
                            }
                          >
                            {" "}
                            {item.presentinDomain == "TRUE"
                              ? item.expertise
                              : null}
                          </td>
                          <td
                            className={
                              item.presentinDomain == "TRUE"
                                ? "nonMember"
                                : "cell-dt"
                            }
                          >
                            {" "}
                            {item.presentinDomain == "TRUE"
                              ? item.numpursuits
                              : null}
                          </td>
                          <td
                            className={
                              item.presentinDomain == "TRUE"
                                ? "nonMember"
                                : "cell-dt"
                            }
                          >
                            {" "}
                            {item.presentinDomain == "TRUE"
                              ? item.rating
                              : null}
                          </td>
                          <td
                            className={
                              item.presentinDomain == "TRUE"
                                ? "nonMember"
                                : "cell-dt"
                            }
                          >
                            {" "}
                            {item.presentinDomain == "TRUE" ? (
                              <TiTick style={{color: "yellowgreen"}} />
                            ) : (
                              <MdClose style={{color: "red"}}></MdClose>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}

                {data.length != 0 && checkCount != 0 && (
                  <div>
                    <hr />
                  </div>
                )}
                {data.length == 0 && (
                  <center>
                    <label>No Results Found!!</label>
                  </center>
                )}
              </div>
            }
          />
        </div>
      )}
    </div>
  );
};

export default SearchByFile;
