export interface IData {
    me: IMe;
    coverLetterData: ICoverLetterData;
    cvData: ICVData;    
}

export interface IMe {
    firstname: string;
    lastname: string;

    job: string;

    avatar: string;
    sign: string;

    birthdate: string;
    birthplace: string;
    nationality: string;
    familyStatus: string;

    address: string;
    city: string;
    phoneNumber: string;
    mail: string;
}

export interface ICVData {
    educations: IEducationEntry[];
    practicalExperiences: IExperienceEntry[];
    professionalExperiences: IExperienceEntry[];
    
    languages: ILanguage[];
    software: string[];
}

export interface ICoverLetterData {
    receiver: {
        name: string;
        department: string;
        company: string;
        address: string;
        city: string;
    };

    applicationJobName: string;

    date: string;
    city: string;

    greeting: string;
    content: string[];
    salutation: string;
}

export interface ITimelineEntry {
    date: string;
    name: string;
}

export interface IEducationEntry extends ITimelineEntry {
    grade: number;
    school: string;
    thesis?: string;
    subjects?: string;
    keywords: string[];
}

export interface ITask {
    name: string;
    keywords: string[];
}

export interface IExperienceEntry extends ITimelineEntry {
    company: string;
    tasks: ITask[];
}

export interface ILanguage {
    name: string;
    level: string;
}
