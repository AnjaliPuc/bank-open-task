import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-eligibility-calculator',
  templateUrl: './eligibility-calculator.component.html',
  styleUrls: ['./eligibility-calculator.component.css']
})
export class EligibilityCalculatorComponent implements OnInit {

  @ViewChild('f') eligibilityCalculator: NgForm;

  existing_loan_emi: number = 0;
  loanAmount: number = 120000;
  calculatedEMI: number = 20000;

  repaymentTenures = [
    { id: 6, time: '6 Months' },
    { id: 12, time: '1 Year' },
    { id: 18, time: '1.6 Years' },
    { id: 24, time: '2 Years' },
    { id: 30, time: '2.6 Years' },
    { id: 36, time: '3 Years' }
  ];

  constructor() { }

  ngOnInit(): void {

  }


 

  calculateLoanAmtAndEMI() {
    let value = this.eligibilityCalculator.value;
    this.existing_loan_emi = parseInt(value.loanEMI);
  
    if ( this.existing_loan_emi) {
      if ( this.existing_loan_emi > 30000) {
        this.loanAmount = 0;
        this.calculatedEMI = 0;
      } else {
        this.loanAmount =
          ((value.income - value.expense -  this.existing_loan_emi) * parseInt(value.tenure)) * 0.2;
          this.calculatedEMI = this.loanAmount / parseInt(value.tenure);
      }
    }
    else {
      this.loanAmount =
        ((value.income - value.expense) * parseInt(value.tenure)) * 0.2;
        this.calculatedEMI = this.loanAmount / parseInt(value.tenure);
    }

    console.log(this.existing_loan_emi, this.loanAmount, this.calculatedEMI);

  }

  onCheckboxChange() {
    this.existing_loan_emi = 0;
  }

}
