const LitresAt60 = (litres, SG, Temp) => {
    let standard_A = BTable23(SG,Temp);
    let standard_B = BTable24(standard_A,Temp);
    let resultant = litres*standard_B;

    return resultant;
}

const BTable23 = (SG, Temp) => {
    let H29 = Temp - 60
    let H30 = 1 - 0.00001278 * H29 - 0.0000000062 * H29 * H29
    let H31 = SG * 999.012
    let J29 = H31 * H30

    if(SG>= 0.839){
        var J30 = 103.872 / J29 / J29 + 0.2701 / J29
    }
    else if(SG>=0.789){
        var J30 = 330.301/J29/J29+0.2701/J29
    }
    else if(SG>=0.771){
        var J30 = -0.0018684 + 1489.067 / J29 / J29
    }
    else{
        var J30 = 192.4571 / J29 / J29 + 0.2438 / J29
    }

    J31 = Math.exp(-J30 * H29 - 0.8 * J30 * J30 * H29 * H29)
    J32 = J29 / 999.012
    K29 = J29 / J31

    if(J32>= 0.839){
        var K30 = 103.872 / K29 / K29 + 0.2701 / K29
    }
    else if(J32>=0.789){
        var K30 = 330.301 / K29 / K29
    }
    else if(J32>=0.771){
        var K30 = -0.0018684 + 1489.067 / K29 / K29

    }
    else{
        var K30 = 192.4571 / K29 / K29 + 0.2438 / K29
    }
    K31 = Math.exp(-K30 * H29 - 0.8 * K30 * K30 * H29 * H29)
    K32 = K29 / 999.012
    L29 = J29 / K31

    if(K32>= 0.839){
        var L30 = 103.872 / L29 / L29 + 0.2701 / L29

    }
    else if(K32>=0.789){
        var K30 = 330.301 / K29 / K29
    }
    else if(K32>=0.771){
        L30 = -0.0018684 + 1489.067 / L29 / L29
    }
    else{
        var L30 = 192.4571 / L29 / L29 + 0.2438 / L29
    }
    L31 = Math.exp(-L30 * H29 - 0.8 * L30 * L30 * H29 * H29)
    L32 = L29 / 999.012
    M29 = J29 / L31

    if(L32>= 0.839){
        var M30 = 103.872 / M29 / M29 + 0.2701 / M29
    }
    else if(L32>=0.789){
        var M30 = 330.301 / M29 / M29
    }
    else if(L32>=0.771){
        var M30 = -0.0018684 + 1489.067 / M29 / M29
    }
    else{
        var M30 = 192.4571 / M29 / M29 + 0.2438 / M29
    }
    
    M31 = Math.exp(-M30 * H29 - 0.8 * M30 * M30 * H29 * H29)
    M32 = M29 / 999.012
    N29 = J29 / M31

    if(M32>= 0.839){
        var N30 = 103.872 / N29 / N29 + 0.2701 / N29

    }
    else if(M32>=0.789){
        var N30 = 330.301 / N29 / N29

    }
    else if(M32>=0.771){
        var N30 = -0.0018684 + 1489.067 / N29 / N29

    }
    else{
        var N30 = 192.4571 / N29 / N29 + 0.2438 / N29
    }

    N31 = Math.exp(-N30 * H29 - 0.8 * N30 * N30 * H29 * H29)
    N32 = N29 / 999.012
    O29 = J29 / N31

    if(N32>= 0.839){
        var O30 = 103.872 / O29 / O29 + 0.2701 / O29


    }
    else if(N32>=0.789){
        var O30 = 330.301 / O29 / O29


    }
    else if(N32>=0.771){
        var O30 = -0.0018684 + 1489.067 / O29 / O29


    }
    else{
        var O30 = 192.4571 / O29 / O29 + 0.2438 / O29
    }

    O31 = Math.exp(-O30 * H29 - 0.8 * O30 * O30 * H29 * H29)
    O32 = O29 / 999.012
    P29 = J29 / O31

    if(O32>= 0.839){
        var P30 = 103.872 / P29 / P29 + 0.27016 / P29
    }
    else if(O32>=0.789){
        var P30 = 330.301 / P29 / P29
    }
    else if(O32>=0.771){
        var P30 = -0.0018684 + 1489.067 / P29 / P29
    }
    else{
        var P30 = 192.4571 / P29 / P29 + 0.2438 / P29
    }

    P31 = Math.exp(-P30 * H29 - 0.8 * P30 * P30 * H29 * H29)
    P32 = P29 / 999.012
    Q29 = J29 / P31

    if(P32>= 0.839){
        var Q30 = 103.872 / Q29 / Q29 + 0.2701 / Q29

    }
    else if(P32>=0.789){
        var Q30 = 330.301 / Q29 / Q29

    }
    else if(P32>=0.771){
        var Q30 = -0.0018684 + 1489.067 / Q29 / Q29
    }
    else{
        var Q30 = 192.4571 / Q29 / Q29 + 0.2438 / Q29
    }
    Q31 = Math.exp(-Q30 * H29 - 0.8 * Q30 * Q30 * H29 * H29)
    Q32 = Q29 / 999.012
    R29 = J29 / Q31

    if(Q32>= 0.839){
        var R30 = 103.872 / R29 / R29 + 0.2701 / R29
    }
    else if(Q32>=0.789){
        var R30 = 330.301 / R29 / R29
    }
    else if(Q32>=0.771){
        var R30 = -0.0018684 + 1489.067 / R29 / R29
    }
    else{
        var R30 = 192.4571 / R29 / R29 + 0.2438 / R29
    }
    R31 = Math.exp(-R30 * H29 - 0.8 * R30 * R30 * H29 * H29)
    R32 = R29 / 999.012
    S29 = J29 / R31

    if(R32>= 0.839){
        var S30 = 103.872 / S29 / S29 + 0.2701 / S29

    }
    else if(R32>=0.789){
        var S30 = 330.301 / S29 / S29

    }
    else if(R32>=0.771){
        var S30 = -0.0018684 + 1489.067 / S29 / S29

    }
    else{
        var S30 = 192.4571 / S29 / S29 + 0.2438 / S29
    }
    S31 = Math.exp(-S30 * H29 - 0.8 * S30 * S30 * H29 * H29)
    S32 = S29 / 999.012
    T29 = J29 / S31

    if(S32>= 0.839){
        var T30 = 103.872 / T29 / T29 + 0.2701 / T29
    }
    else if(S32>=0.789){
        var T30 = 330.301 / T29 / T29
    }
    else if(S32>=0.771){
        var T30 = -0.0018684 + 1489.067 / T29 / T29
    }
    else{
        var T30 = 192.4571 / T29 / T29 + 0.2438 / T29
    }
    T31 = Math.exp(-T30 * H29 - 0.8 * T30 * T30 * H29 * H29)
    T32 = T29 / 999.012
    U29 = J29 / T31

    if(T32>= 0.839){
        var U30 = 103.872 / U29 / U29 + 0.2701 / U29

    }
    else if(T32>=0.789){
        var U30 = 330.301 / U29 / U29
    }
    else if(T32>=0.771){
        var U30 = -0.0018684 + 1489.067 / U29 / U29
    }
    else{
        var U30 = 192.4571 / U29 / U29 + 0.2438 / U29
    }
    U31 = Math.exp(-U30 * H29 - 0.8 * U30 * U30 * H29 * H29)
    U32 = U29 / 999.012
    V29 = J29 / U31

    if(U32>= 0.839){
        var V30 = 103.872 / V29 / V29 + 0.2701 / V29
    }
    else if(U32>=0.789){
        var V30 = 330.301 / V29 / V29
    }
    else if(U32>=0.771){
        var V30 = -0.0018684 + 1489.067 / V29 / V29
    }
    else{
        var V30 = 192.4571 / V29 / V29 + 0.2438 / V29
    }
    V31 = Math.exp(-V30 * H29 - 0.8 * V30 * V30 * H29 * H29)
    V32 = V29 / 999.012
    W29 = J29 / V31

    if(V32>= 0.839){
        var W30 = 103.872 / W29 / W29 + 0.2701 / W29
    }
    else if(V32>=0.789){
        var W30 = 330.301 / W29 / W29
    }
    else if(V32>=0.771){
        var W30 = -0.0018684 + 1489.067 / W29 / W29

    }
    else{
        var W30 = 192.4571 / W29 / W29 + 0.2438 / W29
    }
    W31 = Math.exp(-W30 * H29 - 0.8 * W30 * W30 * H29 * H29)
    W32 = W29 / 999.012
    X29 = J29 / W31

    if(W32>= 0.839){
        var X30 = 103.872 / X29 / X29 + 0.2701 / X29
    }
    else if(W32>=0.789){
        var X30 = 330.301 / X29 / X29
    }
    else if(W32>=0.771){
        var X30 = -0.0018684 + 1489.067 / X29 / X29
    }
    else{
        var X30 = 192.4571 / X29 / X29 + 0.2438 / X29
    }
    X31 = Math.exp(-X30 * H29 - 0.8 * X30 * X30 * H29 * H29)
    X32 = X29 / 999.012
    Y29 = J29 / X31

    if(X32>= 0.839){
        var Y30 = 103.872 / Y29 / Y29 + 0.2701 / Y29
    }
    else if(X32>=0.789){
        var Y30 = 330.301 / Y29 / Y29
    }
    else if(X32>=0.771){
        var Y30 = -0.0018684 + 1489.067 / Y29 / Y29
    }
    else{
        var Y30 = 192.4571 / Y29 / Y29 + 0.2438 / Y29
    }
    Y31 = Math.exp(-Y30 * H29 - 0.8 * Y30 * Y30 * H29 * H29)
    Y32 = Y29 / 999.012
    Z29 = J29 / Y31

    if(Y32>= 0.839){
        var Z30 = 103.872 / Z29 / Z29 + 0.2701 / Z29
    }
    else if(Y32>=0.789){
        var Z30 = 330.301 / Z29 / Z29
    }
    else if(Y32>=0.771){
        var Z30 = -0.0018684 + 1489.067 / Z29 / Z29
    }
    else{
        var Z30 = 192.4571 / Z29 / Z29 + 0.2438 / Z29
    }
    Z31 = Math.exp(-Z30 * H29 - 0.8 * Z30 * Z30 * H29 * H29)
    Z32 = Z29 / 999.012
    AA29 = J29 / Z31

    if(Z32>= 0.839){
        var AA30 = 103.872 / AA29 / AA29 + 0.2701 / AA29

    }
    else if(Z32>=0.789){
        var AA30 = 330.301 / AA29 / AA29

    }
    else if(Z32>=0.771){
        var AA30 = -0.0018684 + 1489.067 / AA29 / AA29

    }
    else{
        var AA30 = 192.4571 / AA29 / AA29 + 0.2438 / AA29
    }
    AA31 = Math.exp(-AA30 * H29 - 0.8 * AA30 * AA30 * H29 * H29)
    AA32 = AA29 / 999.012
    return Math.round(AA29/999.012)
}

const BTable24 = (SG23,Temp)=>{
    if(SG23>=0.839){
        J40 = 103.872 / (SG23 * 999.012) / (SG23 * 999.012) + 0.2701 / (SG23 * 999.012)
    }
    else if(SG23>=0.789){
        J40 = 330.301 / (SG23 * 999.012) / (SG23 * 999.012)
    }
    else if(SG23 >= 0.771){
        J40 = -0.0018684 + 1489.067 / (SG23 * 999.012) / (SG23 * 999.012)
    }
    else{
        J40 = 192.4571 / (SG23 * 999.012) / (SG23 * 999.012) + 0.2438 / (SG23 * 999.012)
    }

    J41 = Math.exp(-J40 * (Temp - 60) - 0.8 * J40 * J40 * (Temp - 60) * (Temp - 60))
    return Math.round(J41)
}

module.exports = LitresAt60;