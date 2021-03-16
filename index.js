/* Your Code Here */
function createEmployeeRecord(empDetails) {
  return {
    firstName: empDetails[0],
    familyName: empDetails[1],
    title: empDetails[2],
    payPerHour: empDetails[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(empRecords) {
  let employeeRecords = [];

  for (const empRecord of empRecords) {
    employeeRecords.push(createEmployeeRecord(empRecord));
  }

  return employeeRecords;
}

function createTimeInEvent(dateTimeStamp) {
  this.timeInEvents.push({
    type: 'TimeIn',
    hour: parseInt(dateTimeStamp.slice(-4)),
    date: dateTimeStamp.slice(0, dateTimeStamp.indexOf(' '))
  })
  return this;
}

function createTimeOutEvent(dateTimeStamp) {
  this.timeOutEvents.push({
    type: 'TimeOut',
    hour: parseInt(dateTimeStamp.slice(-4)),
    date: dateTimeStamp.slice(0, dateTimeStamp.indexOf(' '))
  })
  return this;
}

function hoursWorkedOnDate(dateStamp) {
  let timeIn, timeOut;

  for (const timeInEvent of this.timeInEvents) {
    if (timeInEvent.date === dateStamp) {
      timeIn = timeInEvent.hour;
    }
  };

  for (const timeOutEvent of this.timeOutEvents) {
    if (timeOutEvent.date === dateStamp) {
      timeOut = timeOutEvent.hour;
    };
  };

  return (timeOut - timeIn) / 100;
};

function wagesEarnedOnDate(dateStamp) {
  return hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour;
};

// const allWagesFor = employeeRecord => {
//   return employeeRecord.timeInEvents.reduce((total, timeIn) => total + wagesEarnedOnDate(employeeRecord, timeIn.date), 0);
// }

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 let allWagesFor = function () {
  let eligibleDates = this.timeInEvents.map(function (e) {
      return e.date
  })

  let payable = eligibleDates.reduce(function (memo, d) {
      console.log(`Hours worked by ${this.firstName} on ${d} >> ${hoursWorkedOnDate.call(this, d)}`)
      return memo + wagesEarnedOnDate.call(this, d)
  }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable
}

function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(employee => employee.firstName === firstName);
}

function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce((total, empRecord) => total + allWagesFor.call(empRecord), 0);
}