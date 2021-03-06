// TODO(conankun): Extract these static information into JSON file.
export const officerCategoryList = new Map().set(2020, ['chapterBoard', 'ygGroupBoard', 'ygGroup', 'industryMentor']);

export const officerCategoryString = new Map().set('chapterBoard', 'Chatper Board Members')
                                            .set('ygGroupBoard', 'YG Group Board Members')
                                            .set('ygGroup', 'YG Group Officers')
                                            .set('industryMentor', 'Industry Mentors');

const officersList = new Map().set(2020, 
    {
        chapterBoard: [6,7,8,9,10,11,12], 
        ygGroupBoard: [1,2,3,4,5], 
        ygGroup: [13,14,15,16,17,18,19,20,21,23], 
        industryMentor: [22]
    })
    .set(2019, [])
    .set(2018, []);

const officerName = new Map().set(1, 'Terry Kim')
                            .set(2, 'Andy Gilhyun Kim')
                            .set(3, 'Paul Hyun-min Kim')
                            .set(4, 'Junghyun Kim')
                            .set(5, 'Catherine NaYoung Ryu')
                            .set(6, 'Sun Min Jung')
                            .set(7, 'Brian Maeng, PhD')
                            .set(8, 'Jin Y. Kim')
                            .set(9, 'Sam Chung, PhD')
                            .set(10, 'Woon Jong Yoon, PhD')
                            .set(11, 'Heonmin Lim')
                            .set(12, 'Jae H. Kim, PhD')
                            .set(13, 'Saehee Kwak')
                            .set(14, 'Ryan Cho')
                            .set(15, 'Cathy Lee')
                            .set(16, 'Sukyong Yun')
                            .set(17, 'Daehyun Kang')
                            .set(18, 'Hana Song')
                            .set(19, 'Brian Anthony Jhong')
                            .set(20, 'Yegee Lee')
                            .set(21, 'Isaiah Wankyom Kim')
                            .set(22, 'Alan Yu')
                            .set(23, 'May Kim');

const officerImage = new Map().set(1, 'img/team/profile_terrykim.png')
                            .set(2, 'img/team/profile_andykim.png')
                            .set(3, 'img/team/profile_hyunminkim.jpeg')
                            .set(4, 'img/team/profile_junghyunkim.png')
                            .set(5, 'img/team/profile_nayoungryu.png')
                            .set(6, 'img/team/profile_sunminjung.jpg')
                            .set(7, 'img/team/profile_brianmaeng.jpeg')
                            .set(8, 'img/team/profile_jinkim.jpg')
                            .set(9, 'img/team/profile_samchung.png')
                            .set(10, 'img/team/profile_woonyoon.png')
                            .set(11, 'img/team/profile_heonminlim.jpg')
                            .set(12, 'img/team/profile_jaekim.jpg')
                            .set(13, 'img/team/profile_saeheekwak.jpg')
                            .set(14, 'img/team/profile_ryancho.png')
                            .set(15, 'img/team/profile_cathylee.png')
                            .set(16, 'img/team/profile_sukyongyun.png')
                            .set(17, 'img/team/profile_daehyunkang.png')
                            .set(18, 'img/team/profile_hanasong.jpg')
                            .set(19, 'img/team/profile_brianjhong.jpg')
                            .set(20, 'img/team/profile_yegeelee.jpg')
                            .set(21, 'img/team/profile_isaiahkim.png')
                            .set(22, 'img/team/profile_alanyu.png')
                            .set(23, 'img/team/profile_maykim.png');

const officerPosition = new Map().set(2020, 
    {
        1: 'President', 
        2: 'Vice President', 
        3: 'Material/Membership Lead', 
        4: 'Virtual Lead', 
        5: 'Senior Advisor',
        6: 'President',
        7: 'VP of Academic Relations',
        8: 'Secretary',
        9: 'Member-at-Large',
        10: 'Senior Advisor',
        11: 'Senior Advisor',
        12: 'Senior Advisor',
        13: '',
        14: '',
        15: '',
        16: '',
        17: '',
        18: '',
        19: '',
        20: '',
        21: '',
        22: '',
        23: '',
    });

const officerJobWithAfiliation = new Map().set(2020, 
    {
        1: {job: "Analyst", affiliation: "Boeing"},
        2: {job: "Undergraduate", affiliation: "University of Washington"},
        3: {job: "Undergraduate", affiliation: "University of Washington"},
        4: {job: "Software Engineer", affiliation: "Google"},
        5: {job: "PharmD Student", affiliation: "University of Washington"},
        6: {job: "Product Marketing, Boeing", affiliation: "Boeing"},
        7: {job: "Associate Faculty", affiliation: "City University of Seattle"},
        8: {job: "Senior Program Manager", affiliation: "Microsoft"},
        9: {job: "Professor/Director Computer Science", affiliation: "City University of Seattle"},
        10: {job: "Associate Professor", affiliation: "University of Washington"},
        11: {job: "Senior Software Developer Team Lead", affiliation: "Microsoft"},
        12: {job: "Executive/Senior Technical Fellow", affiliation: "Boeing"},
        13: {job: "Undergraduate", affiliation: "University of Washington"},
        14: {job: "Undergraduate", affiliation: "University of Washington Bothell"},
        15: {job: "Mechanical Engineer"},
        16: {job: "Master's student", affiliation: "University of Washington"},
        17: {job: "Post Doc", affiliation: "University of Washington"},
        18: {job: "PharmD Student", affiliation: "University of Washington"},
        19: {job: "Software Engineer", affiliation: "Apptio"},
        20: {job: "Softwareg Engineer", affiliation: "Amazon"},
        21: {job: "Undergraduate", affiliation: "University of Washington"},
        22: {job: "Program Manager", affiliation: "Microsoft"},
        23: {job: "Undergraduate", affiliation: "University of Washington"}
    });

const officerList = (year, category) => {
    if (officerCategoryList.has(year)
        && officersList.has(year) 
        && officerPosition.has(year) 
        && officerJobWithAfiliation.has(year)) {
        let officers = officersList.get(year)[category];
        let positions = officerPosition.get(year);
        let jobWithAfiliation = officerJobWithAfiliation.get(year);
        let ret = [];
        officers.forEach(officerNum => {
            if(officerName.has(officerNum) 
                && officerImage.has(officerNum) 
                && officerNum in positions
                && officerNum in jobWithAfiliation) {
                let officerInfo = {};
                // Assign id to the officer object so that react can identify each offier.
                officerInfo['id'] = officerNum;
                officerInfo['name'] = officerName.get(officerNum);
                officerInfo['img'] = officerImage.get(officerNum);
                officerInfo['position'] = positions[officerNum];
                officerInfo['job'] = jobWithAfiliation[officerNum]['job'];
                officerInfo['affiliation'] = jobWithAfiliation[officerNum]['affiliation'];
                ret.push(officerInfo); 
            } else {
                // Throw an exception
            }
            return null;
        });
        // Throw an exception
        return ret;
    }
    console.log(year);
    console.log('officerCategoryList.has(year)' + officerCategoryList.has(year));
    console.log('does not have');
    return [];
}

export default officerList;