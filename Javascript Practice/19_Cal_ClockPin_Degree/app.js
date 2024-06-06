//? Function calculate clock pin degree

//* Hr ; 1 min => 1/60 degree
//* Min ; 1 min => 6 degree


function clockDegree(hr, minute) {
    const minuteDegree = minute * 6
    const pureHrDegree = hr * 30 // ถ้านาฬิกาใช้ 24 hr => ควรเอา hr % 12 ด้วย
    const minPassHrDegree = minute / 2
    const realHrDegree = pureHrDegree + minPassHrDegree

    //? Re-check degree
    console.log(`pureHr Degree : ${pureHrDegree}`);
    console.log(`minPassDegree : ${minPassHrDegree}`);
    console.log(`Hr degree : ${realHrDegree}`);
    console.log(`Min Degree : ${minuteDegree}`);

    //!  คำนวณมุมระหว่างเข็มชั่วโมงและเข็มนาที
    let crossDegree = Math.abs(realHrDegree - minuteDegree);

    //! ถ้ามุมมากกว่า 180 องศา ให้ใช้มุมตรงกันข้ามแทน
    if (crossDegree > 180) {
        crossDegree = 360 - crossDegree
    }

    console.log(crossDegree);
}

clockDegree(5,45) // Should be 97.5
