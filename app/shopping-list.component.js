'use strict';

angular.
    module('myShoppingList').
    component('shoppingList', {
        templateUrl: 'shopping-list.template.html',
        controller: function ShoppingListController () {
            var vm = this;

            vm.errorText = "";

            vm.items = ['Milk', 'Bread', 'Cheese'];


            vm.removeItem = function (itemPos) {
                vm.items.splice(itemPos, 1);
            };

            vm.addItem = function (item) {

                // no empty field
                if (item === undefined) {
                    vm.errorText = "This field must not be empty";
                    return;
                }

                // no repeat items
                if (vm.items.indexOf(item) !== -1) {
                    vm.errorText = "Duplicated item";
                    return;
                }

                vm.items.push(item);
            };

        }
});