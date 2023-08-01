const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
}

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
};

const priceAfterSub = (customer) => {
    let price = customer.pricePerRefill * customer.refills;
    if (customer.subscription) {
        price = price * 0.75;
    }
    if (customer.coupon) {
        price = price - 10;
    }
    return price;

}

const customerArray = [timmy, sarah, rocky]

const funcArray = (array) => {
    const priceDis = []
    for (let i = 0; i < array.length; i++) {
        const result = priceAfterSub(array[i])
        priceDis.push(result)
    }
    console.log(priceDis)
}
 

funcArray(customerArray)