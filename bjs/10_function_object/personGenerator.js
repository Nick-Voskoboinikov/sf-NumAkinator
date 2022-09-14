const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Алевтина",
            "id_2": "Александра",
            "id_3": "Анна",
            "id_4": "Мария",
            "id_5": "Назгуль",
            "id_6": "Наталья",
            "id_7": "Наталия",
            "id_8": "Иванна",
            "id_9": "Ольга",
            "id_10": "Серафима"
        }
    }`,
    patronymicNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Тимофеевич",
            "id_3": "Иванович",
            "id_4": "Сергеевич",
            "id_5": "Максимович",
            "id_6": "Дмитриевич",
            "id_7": "Михайлович",
            "id_8": "Степанович",
            "id_9": "Егорович",
            "id_10": "Андреевич"
        }
    }`,
    jobMaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "слесарь",
            "id_2": "шахтёр",
            "id_3": "сталевар",
            "id_4": "юрист",
            "id_5": "переворачиватель пингвинов"
        }
    }`,
    jobFemaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "преподаватель",
            "id_2": "адвокат",
            "id_3": "министр",
            "id_4": "космонавтка",
            "id_5": "спортсменка, комосомолка, хороший человек"
        }
    }`,
    monthsJson: `{
        "count": 12,
        "list": {     
            "id_1": {"name": "января", "max": 31},
            "id_2": {"name": "февраля", "max": 28},
            "id_3": {"name": "марта", "max": 31},
            "id_4": {"name": "апреля", "max": 30},
            "id_5": {"name": "мая", "max": 31},
            "id_6": {"name": "июня", "max": 30},
            "id_7": {"name": "июля", "max": 31},
            "id_8": {"name": "августа", "max": 31},
            "id_9": {"name": "сентября", "max": 30},
            "id_10": {"name": "октября", "max": 31},
            "id_11": {"name": "ноября", "max": 30},
            "id_12": {"name": "декабря", "max": 31}
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function(gender) {
let resultingFirstName; // return this var afterwards
if (gender === 'Мужчина'){ // if male
    resultingFirstName=this.randomValue(this.firstNameMaleJson); // fetch male name
} else { // if female, hopefully
    resultingFirstName=this.randomValue(this.firstNameFemaleJson); // fetch female name
} // that was final option
        return resultingFirstName; // push things back to caller
    },

    randomPatronymicName: function(gender) {
return (gender === 'Мужчина')?this.randomValue(this.patronymicNameMaleJson):(this.randomValue(this.patronymicNameMaleJson)).replace('вич','вна'); // fetch some patronymic
    },

    randomJobName: function(gender) {
return (gender === 'Мужчина') ? this.randomValue(this.jobMaleJson) : this.randomValue(this.jobFemaleJson); // fetch me some job
    },

    randomGender: function() {
        return (this.randomIntNumber()===0)? this.GENDER_MALE : this.GENDER_FEMALE; // 0-male,1-female
    },

    randomBirthYear: function() {
        return this.randomIntNumber(2022,1922); // returns a random number within last century
    },

    randomBirthDate: function(year) {
let birthMonth=this.randomValue(this.monthsJson); // fetch month
        return this.randomIntNumber(birthMonth.max,1) +' '+ birthMonth.name; //  returns a random birth date
    // TODO: consider leap years for February dates generation
    },


    randomSurname: function(gender) {
        let resultingSurname=this.randomValue(this.surnameJson); // fetch surname from the list
        resultingSurname= (gender==='Женщина')? resultingSurname+'а' : resultingSurname; //female surnames postfix
        return resultingSurname;

    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.birthYear = this.randomBirthYear();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.lastName = this.randomSurname(this.person.gender);
        this.person.secondName = this.randomPatronymicName(this.person.gender);
        this.person.jobName = this.randomJobName(this.person.gender);
        this.person.birthDate = this.randomBirthDate(this.person.birthYear);
        return this.person;
    }
};
