function saveSessionId(sessionId) {
  localStorage.setItem("sessionId", sessionId);
}

function getSessionId() {
  return localStorage.getItem("sessionId");
}

function saveFeatureInstanceId(featureInstanceId) {
  localStorage.setItem("featureInstanceId", featureInstanceId);
}

function getFeatureInstanceId() {
  return localStorage.getItem("featureInstanceId");
}

export {
  saveSessionId,
  getSessionId,
  saveFeatureInstanceId,
  getFeatureInstanceId,
};
