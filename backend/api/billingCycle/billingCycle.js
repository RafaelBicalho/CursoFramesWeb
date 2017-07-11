const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema ({
name: {type: String, required: true },
value: {type: Number, required: true}
})

const debtSchema = new mongoose.Schema ({
name: {type: String, required: true },
value: {type: Number, min: 0, required:[ true , 'Informe o valor do debito!'] },
status: {type: String, required: false ,  uppercase: true,
enum: ['PAGO', 'PENDENTE', 'AGENDADO']}
})

const billingCycleSchema = new mongoose.Schema ({
name: {type: String, required: true },
month: {type: Number, min: 0 , max: 12 ,  required: true} ,
year: {type: Number, min: 1970 , max: 2100,  required: true},
Credits:[creditSchema],
Debts:[debtSchema]
})
module.exports = restful.model('BillingCycle',billingCycleSchema)