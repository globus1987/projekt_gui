export interface User {
    firstName: string;
    surname: string;
    emailAddress: string;
    userType:string;
  }
  export interface TestCase{
      name:string;
      status:string;
      lastExecutionDate:string;
      inputFileId:string;
      resultList:TestResult[];
  }
  export interface TestResult{
    expectedValue:string;
    actualValue:string;
    valueComparison:boolean;
  }
  export interface TestSuite{
      name:string;
      creatorUser:User;
      testcaseList:TestCase[];
      importDate:string;
      request:string;
  }