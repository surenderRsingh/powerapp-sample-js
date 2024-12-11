import moment from "moment";
export class AccountForm{
    static async onload(context: Xrm.Events.EventContext): Promise<void>{
        const now = moment().format();
        const formContext = context.getFormContext();
        const attr = formContext.getAttribute("name");
        attr
        .addOnChange(()=>console.log(`name onchange at -- ${now}`));
    }
}