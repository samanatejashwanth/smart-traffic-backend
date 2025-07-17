function generateSmartRoute(location, congestionLevel) {
  let suggestedRoute = 'Route 1';
  let message = `No congestion in ${location}.`;

  if (congestionLevel === 'High') {
    suggestedRoute = 'Outer Ring Road';
    message = `High congestion in ${location} during Evening Peak.`;
  } else if (congestionLevel === 'Medium') {
    suggestedRoute = 'Inner Ring';
    message = `Moderate congestion in ${location}, rerouting...`;
  }

  return {
    message,
    suggestedRoute,
    priority: congestionLevel
  };
}

module.exports = { generateSmartRoute };
