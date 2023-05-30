const memberDB = new Map();
const diaryDB = new Map();

// MEMBER DB START
const addMember = (id, pw, mail) => {
    console.log('addMember() CALLED!!');
    memberDB.set(id, {
                        u_id: id,
                        u_pw: pw,
                        u_mail: mail,
                     });
    diaryDB.set(id, []);
    console.log(memberDB.get(id));
} 
const searchMember = (id, pw) => {
    console.log('searchMember() CALLED!!');
    // id(key값)을 가지고 memberDB로부터 데이터를 가져옴
    let memObj = memberDB.get(id);
    // memObj 정보가 있고 pw가 일치하면 true값 반환, 아니면 false값 반환
    if (memObj !== undefined && memObj.u_pw === pw){
        console.log('SIGN IN SUCCESS!!')
        return true
    }
    console.log('SIGN IN FAIL!!')
    return false;
} 
// MEMBER DB END

// DIARY DB START
const addDIary = (txt) => {
    console.log('addDIary() CALLED!!');
    // diaryDB에서 현재 로그인된 사람의 배열을 꺼내와야함
    let diaryArr = diaryDB.get(signInedMemberId);
    diaryArr.push(txt);
    console.log('diaryArr: ', diaryArr);
} 
const searchDIaries = () => {
    console.log('searchDIary() CALLED!!');
    // diaryDB에서 현재 로그인된 사람의 배열을 꺼내와서 전체를 반환함
    let diaryArr = diaryDB.get(signInedMemberId);
    console.log('diaryArr: ', diaryArr);
    return diaryArr;
} 
// DIARY DB END