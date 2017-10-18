(function(){
    angular.module('primeiraApp').controller('BillingCycleCtrl', [
        '$http',
        'msgs',
        'tabs',
        BillingCycleController
    ])

    function BillingCycleController($http, msgs, tabs){
        const vm = this
        const url = 'http://localhost:3003/api/billingCycles'

        vm.refresh = function(){
            $http.get(url).then(function(response){
<<<<<<< HEAD
                vm.billingCycle = {}
                vm.billingCycles = response.data
=======
                vm.billingCycle = {credits:[{}], debts:[{}]}
                vm.billingCycles = response.data
                vm.calculateValues()
>>>>>>> parent of e98c815... sdsaaddas
                tabs.show(vm, {tabList: true, tabCreate: true })
            })
        }

        vm.create = function(){
            $http.post(url, vm.billingCycle).then(function(response){
                vm.refresh()
                msgs.addSuccess('Operação realizada com sucesso!')
            }).catch(function(response){
                msgs.addError(response.data.errors)
            })
        }

        vm.showTabUpdate = function(billingCycle){
              vm.billingCycle = billingCycle
<<<<<<< HEAD
=======
               initCreditsAndDebts()
              vm.calculateValues()
>>>>>>> parent of e98c815... sdsaaddas
              tabs.show( vm, {tabUpdate:true})
          }
            vm.showTabDelete = function(billingCycle){
                  vm.billingCycle = billingCycle
<<<<<<< HEAD
                  tabs.show( vm, {tabDelete:true})
              }

=======
                  vm.calculateValues()
                  tabs.show( vm, {tabDelete:true})
              }

              vm.update = function() {
                const updateUrl = `${url}/${vm.billingCycle._id}`
                $http.put(updateUrl,vm.billingCycle).then(function(response) {
                  vm.refresh()
                  msgs.addSuccess('Operacao realizada com sucesso!.')
                }).catch(function(response) {
                  msgs.addError(response.errors)
                })
              }

>>>>>>> parent of e98c815... sdsaaddas
              vm.delete = function() {
                const deleteUrl = `${url}/${vm.billingCycle._id}`
                $http.delete(deleteUrl,vm.billingCycle).then(function(response) {
                  vm.refresh()
                  msgs.addSuccess('Operacao realizada com sucesso!.')
<<<<<<< HEAD
                }).catch(function(data) {
                  msgs.addError(data.errors)
                })
              }

=======
                }).catch(function(response) {
                  msgs.addError(response.errors)
                })
              }


              vm.addCredit = function(index) {
                vm.billingCycle.credits.splice(index + 1, 0, {})
              }

              vm.cloneCredit = function(index  ,{ name, value} ) {
                vm.billingCycle.credits.splice(index + 1, 0, {name, value })
                vm.calculateValues()
              }

              vm.deleteCredit = function(index)  {
                if( vm.billingCycle.credits.length > 1) {
                vm.billingCycle.credits.splice(index , 1 )
                vm.calculateValues()
                  }
              }


              vm.addDebt = function(index) {
                vm.billingCycle.debts.splice(index + 1, 0, {})
              }

              vm.cloneDebt = function(index  ,{ name, value} ) {
                vm.billingCycle.debts.splice(index + 1, 0, {name, value })
                vm.calculateValues()
              }

              vm.deleteDebt = function(index)  {
                if( vm.billingCycle.debts.length > 1) {
                vm.billingCycle.debts.splice(index , 1 )
                vm.calculateValues()
                  }
              }

              vm.calculateValues = function() {
                vm.credit = 0
                vm.debt   = 0
                if (vm.billingCycle) {
                  vm.billingCycle.credits.forEach(function({value}) {
                    vm.credit += !value || isNaN(value) ? 0 : parseFloat(value)
                  })
                  vm.billingCycle.debts.forEach(function({value}) {
                    vm.debt += !value || isNaN(value) ? 0 : parseFloat(value)
                  })
                }
                vm.total = vm.credit - vm.debt
              }


                var initCreditsAndDebts = function() {
                  if(!vm.billingCycle.debts || !vm.billingCycle.debts.length) {
                    vm.billingCycle.debts = []
                    vm.billingCycle.debts.push({})
                  }

                  if(!vm.billingCycle.credits || !vm.billingCycle.credits.length) {
                    vm.billingCycle.credits = []
                    vm.billingCycle.credits.push({})
                  }
                   }
>>>>>>> parent of e98c815... sdsaaddas
        vm.refresh()
    }
})()
