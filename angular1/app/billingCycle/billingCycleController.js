(function(){
    angular.module('primeiraApp').controller('BillingCycleCtrl', [
        '$http',
        'msgs',
        BillingCycleController
    ])


<<<<<<< HEAD
        vm.refresh = function(){
            $http.get(url).then(function(response){
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                vm.billingCycle = {}
                vm.billingCycles = response.data
=======
                vm.billingCycle = {credits:[{}], debts:[{}]}
                vm.billingCycles = response.data
                vm.calculateValues()
>>>>>>> parent of e98c815... sdsaaddas
=======
                vm.billingCycle = {}
                vm.billingCycles = response.data
>>>>>>> parent of 76ac509... Merge pull request #2 from RafaelBicalho/v090817
=======
                vm.billingCycle = {}
                vm.billingCycles = response.data
>>>>>>> parent of 0c0f8d8... nao grava deb cred
                tabs.show(vm, {tabList: true, tabCreate: true })
            })
        }
=======
    function BillingCycleController($http, msgs){
        const vm = this
>>>>>>> parent of afe1fbb... Merge pull request #1 from RafaelBicalho/v090817

        vm.create = function(){
            const url = 'http://localhost:3003/api/billingCycles'
            $http.post(url, vm.billingCycle).then(function(response){
                vm.billingCycle = {}
                msgs.addSuccess('Operação realizada com sucesso!')
            }).catch(function(response){
                msgs.addError(response.data.errors)
            })
        }
<<<<<<< HEAD

        vm.showTabUpdate = function(billingCycle){
              vm.billingCycle = billingCycle
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
               initCreditsAndDebts()
              vm.calculateValues()
>>>>>>> parent of e98c815... sdsaaddas
=======
>>>>>>> parent of 76ac509... Merge pull request #2 from RafaelBicalho/v090817
=======
>>>>>>> parent of 0c0f8d8... nao grava deb cred
              tabs.show( vm, {tabUpdate:true})
          }
            vm.showTabDelete = function(billingCycle){
                  vm.billingCycle = billingCycle
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
                  tabs.show( vm, {tabDelete:true})
              }

>>>>>>> parent of 76ac509... Merge pull request #2 from RafaelBicalho/v090817
=======
                  tabs.show( vm, {tabDelete:true})
              }

>>>>>>> parent of 0c0f8d8... nao grava deb cred
              vm.delete = function() {
                const deleteUrl = `${url}/${vm.billingCycle._id}`
                $http.delete(deleteUrl,vm.billingCycle).then(function(response) {
                  vm.refresh()
                  msgs.addSuccess('Operacao realizada com sucesso!.')
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
                }).catch(function(data) {
                  msgs.addError(data.errors)
                })
              }

>>>>>>> parent of 76ac509... Merge pull request #2 from RafaelBicalho/v090817
=======
                }).catch(function(data) {
                  msgs.addError(data.errors)
                })
              }

>>>>>>> parent of 0c0f8d8... nao grava deb cred
        vm.refresh()
=======
>>>>>>> parent of afe1fbb... Merge pull request #1 from RafaelBicalho/v090817
    }
})()
