const LandOwnerRegistrationGenerator = require('../bng-integration-register-business-logic/landownerRegistrationGenerator.js')

const sendResponse = (context, status, body) => {
  context.res = {
    status,
    body
  }
}
module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.')
  const reqData = req.body
  const landOwnerRegistrationGeneratorInstance = new LandOwnerRegistrationGenerator()
  landOwnerRegistrationGeneratorInstance.orchestrationBNG(reqData)
  return sendResponse(context, 200, 'Landowner Registration successfully executed.')
}
