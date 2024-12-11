import { AccountForm } from "../AccountForm";
import { StringAttributeMock, StringControlMock, XrmMockGenerator } from "xrm-mock";

describe("AccountForm.onload", () => {
  beforeEach(() => {
    XrmMockGenerator.initialise();
  });
  it("notifies invalid website addresses", () => {
    const context = XrmMockGenerator.getEventContext();
    const namemock = XrmMockGenerator.Attribute.createString("name", "foobar");
    const namecontrol = XrmMockGenerator.Control.createString(namemock,"name",true,false,"Name");
    namecontrol.addOnOutputChange = jest.fn();
    // websiteMock.controls.itemCollection[0].setNotification = jest.fn();
    AccountForm.onload(context);
    namemock.fireOnChange();
   
  });
//   it("clears notification on valid website address", () => {
//     const context = XrmMockGenerator.getEventContext();
//     const websiteMock = XrmMockGenerator.Attribute.createString("websiteurl", "foo");
//     websiteMock.controls.itemCollection[0].setNotification = jest.fn();
//     websiteMock.controls.itemCollection[0].clearNotification = jest.fn();
//     AccountForm.onload(context);
//     websiteMock.fireOnChange();
//     expect(websiteMock.controls.itemCollection[0].setNotification).toHaveBeenCalledWith(expect.any(String), "websiteurl");

//     websiteMock.value = "https://learn.develop1.net";
//     websiteMock.fireOnChange();
//     expect(websiteMock.controls.itemCollection[0].clearNotification).toHaveBeenCalledWith("websiteurl");
//   });
});
