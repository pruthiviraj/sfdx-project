public with sharing class AccountListControllerLwc {
    @AuraEnabled
    public static List<Account> queryAccountsByRevenue(Decimal annualRevenue){
        return [SELECT Name FROM Account WHERE AnnualRevenue >=: annualRevenue];
    }
}
