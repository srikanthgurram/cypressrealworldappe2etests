import Dinero from "dinero.js";
import {
  User,
  Transaction,
  TransactionRequestStatus,
  TransactionResponseItem,
  Contact,
  TransactionStatus,
} from "../../../src/models";
import { addDays, isWithinInterval, startOfDay } from "date-fns";
import { startOfDayUTC, endOfDayUTC } from "../../../src/utils/transactionUtils";
import { isMobile } from "../../support/utils";

describe("Transaction Feed", function () {
  
  describe("app layout and responsiveness", function () {
    it("toggles the navigation drawer", function () {
    
    });
  });

  describe("renders and paginates all transaction feeds", function () {
    it("renders transactions item variations in feed", function () {
     
    });

      it(`paginates ${feedName} transaction feed`, function () {
       
    });
  });

  describe("filters transaction feeds by date range", function () {
      it("closes date range picker modal", () => {
       
      });

      it(`filters ${feedName} transaction feed by date range`, function () {
        
      });

      it(`does not show ${feedName} transactions for out of range date limits`, function () {
        
      });
    
  });

  describe("filters transaction feeds by amount range", function () {

    it(`filters ${feedName} transaction feed by amount range`, function () {

    });

    it(`does not show ${feedName} transactions for out of range amount limits`, function () {

    });

  });

  describe("Feed Item Visibility", () => {
    it("mine feed only shows personal transactions", function () {

    });

    it("first five items belong to contacts in public feed", function () {

    });

    it("friends feed only shows contact transactions", function () {

    });
  });
});
