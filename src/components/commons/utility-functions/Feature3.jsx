/* eslint-disable react/prop-types */
import * as React from "react";
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
export default class Feature3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      emails: [],
      filteredData: [],
      noMatchData: [],
      clicked: false,
      data: this.props.db ? this.props.db : [],
    };
  }

  componentWillReceiveProps = (newProps) => {
    if (newProps.db) {
      this.setState({data: newProps.db});
      setTimeout(() => {
        console.log(this.state.data);
      }, 50);
    }
  };
  //Search Functionality
  search = () => {
    this.setState({filteredData: [], noMatchData: []});
    for (let i of this.state.file) {
      let data = this.state.data;
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
            let temp = this.state.data;
            for (let k of temp) {
              k.present = true;
            }
            this.setState({data: temp, clicked: true});
          } else {
            i.present = false;
            this.setState({data: [...this.state.data, i], clicked: true});
          }
        }, 50);
      }
    }
  };
  // initiate = (result) => {
  //   console.log(typeof(result))
  //     for(let i of result){
  //       console.log(i)
  //       if(i["email"])
  //         this.setState({ emails : [...this.state.emails, i["email"]]})
  //     }
  //     setTimeout(()=>{
  //       console.log('fin',this.state.emails)
  //       this.search()
  //     },50)

  // }

  //get the files containing the user data and call search functionality with the data as the search keywords
  handleFiles = (files) => {
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
      //return result; //JavaScript object
      console.log(result, typeof result);
      this.setState({file: result});
      this.search();
      // result= JSON.stringify(result); //JSON

      // this.initiate(result)
    };
    reader.readAsText(files[0]);
  };

  //After getting search results, add those users to selected
  addUsersToSelected = (item, index, e) => {
    if (e.target.checked)
      this.setState((prevState) => ({
        checkCount: prevState.checkCount + 1,
        checkboxValid: true,
      }));
    else {
      this.setState(
        (prevState) => ({checkCount: prevState.checkCount - 1}),
        () => {
          if (this.state.checkCount === 0)
            this.setState({checkboxValid: false});
        }
      );
    }
    item.selected = e.target.checked;
    let temp = this.state.data;
    temp[index] = item;
    this.setState({data: temp});
  };
  //If check all is enabled
  addAllUsersToSelected = (e) => {
    if (e.target.checked)
      this.setState((prevState) => ({
        checkCount: prevState.checkCount + 1,
        checkboxValid: true,
      }));
    else {
      this.setState(
        (prevState) => ({checkCount: prevState.checkCount - 1}),
        () => {
          if (this.state.checkCount === 0)
            this.setState({checkboxValid: false});
        }
      );
    }
    let temp = this.state.data;
    for (let item of temp) {
      item.selected = e.target.checked;
    }
    this.setState({data: temp});
  };
  //Generate the list that is to be displayed at the end
  generateFinalList = () => {
    this.setState({clicked: false});
    let newdata = this.state.data.filter((item) => {
      return item.selected;
    });
    this.props.finalData(newdata);
  };

  render() {
    return (
      <div>
        <ReactFileReader handleFiles={this.handleFiles} fileTypes={".csv"}>
          <button className="btn">Upload CSV</button>
        </ReactFileReader>

        {this.state.clicked && (
          <div>
            <hr />
            <label>Results</label>
            <Card
              // title="Domains"
              content={
                <div>
                  {this.state.data.length != 0 && (
                    <Table className="patronTable" striped bordered hover>
                      <thead>
                        <tr className="text-center" style={styles.rowStyle}>
                          <th>
                            {" "}
                            <input
                              type="checkbox"
                              onChange={this.addAllUsersToSelected}
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
                            {this.state.user == "steward"
                              ? "Stewarded"
                              : "Patronized"}
                          </th>
                          <th> Rating</th>
                          <th> Already Present in the Domain</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.data.map((item, index) => (
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
                                onChange={this.addUsersToSelected.bind(
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
                                    "data:image/png;base64," +
                                    item.displaypicture
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
                            {/* <td> {item.present? <TiTick style={{color:'yellowgreen'}} /> : <MdClose style={{color:'red'}} />}</td> */}
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  )}

                  {this.state.data.length != 0 &&
                    this.state.checkCount != 0 && (
                      <div>
                        <hr />
                        {/* <Button className="btn btn-fill btn-success" onClick={this.generateFinalList}>Submit Selected  */}
                        {/* {this.state.user == 'steward' ? 'Stewards' : 'Patrons'} */}
                        {/* </Button> */}
                        <div></div>
                      </div>
                    )}
                  {this.state.data.length == 0 && (
                    <center>
                      <label>No Results Found!!</label>
                    </center>
                  )}
                  {/* { this.state.noMatchData.length!=0 && <> No match found for : <p  style={{color:'red'}}>{this.state.noMatchData.join(', ')}</p></> }  */}
                </div>
              }
            />
          </div>
        )}
      </div>
    );
  }
}
