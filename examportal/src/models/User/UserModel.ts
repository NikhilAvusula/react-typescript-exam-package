export interface IOptionModel{
    questionOptionsId: number,
    createdDate?: string,
    displayText?: string,
    helpText?: string,
    optionText?: string,
    questionOptionUuid?: string,
    status?: string,
    updateBy?: string,
    updateDate?: string
}

export interface IQuestionModel {
    questionId?: number,
    displayHorizontal?: boolean,
    helpText?: string,
    layoutColumns?: number,
    layoutOffset?: number,
    layoutPreset?: number,
    layoutType?: number,
    maxCharacters?: number,
    questionText?: string,
    questionUniqueId?: number,
    questionsUuid?: string,
    questionSummaryText?: string,
    status?: string,
    updatedBy?: string,
    updatedDate?: string,
    questionOptions?: IOptionModel[],
 }

 export interface ISkillsModel{
    id:number,
    text?:string,
    value?:string,
 }

 export interface ICandidateModel{
    firstName:string,
    lastName:string,
    gender:string,
    dateOfBirth:string,
    highestQualification:string,
    passedOutYear:number,
    email:string,
    phoneNumber:number,
    city:string,
    district:string,
    state:string,
    pinCode:number,
    skills:ISkillsModel[],
 }