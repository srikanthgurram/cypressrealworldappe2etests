
describe.skip("Notifications", function () {
 

  describe("notifications from user interactions", function () {
    it(
      "User A likes a transaction of User B; User B gets notification that User A liked transaction ",
      // NOTE: this test seems to have issues in Firefox UI/Mobile tests due to an issue with the Base Button component in MUI v4
      // we should try unskipping this test in Firefox once we upgrade MUI to v5+. @see https://github.com/cypress-io/cypress-realworld-app/issues/1278
      { browser: { name: "!firefox" } },
      function () {
        
      }
    );

    it("User C likes a transaction between User A and User B; User A and User B get notifications that User C liked transaction", function () {
     
    });

    it("User A comments on a transaction of User B; User B gets notification that User A commented on their transaction", function () {
     
    });

    it("User C comments on a transaction between User A and User B; User A and B get notifications that User C commented on their transaction", function () {
      
    });

    it("User A sends a payment to User B", function () {
     
    });

    it("User A sends a payment request to User C", function () {
      
    });
  });

  it("renders an empty notifications state", function () {
    
  });
});
