import { LightningElement,track,wire } from 'lwc';
import queryAccountsByRevenue from "@salesforce/apex/AccountListControllerLwc.queryAccountsByRevenue"
export default class AccountFinder extends LightningElement {
    annualRevenue=null;
    handleChange(event){
        console.log('print on handleChange');
        this.annualRevenue = event.detail.value;
    }
    reset(event){
        console.log('print on click');
        this.annualRevenue = null;
    }

    @wire(queryAccountsByRevenue,{annualRevenue: "$annualRevenue"})
    accounts;
}