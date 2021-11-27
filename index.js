let sum = 0;
let brandSum = 0;
const limit = 2000000;
function onInput() {
    const inputs = document.querySelectorAll("input");
    const values = Object.values(inputs).filter(input => input.value !== "");
    if (values.length < inputs.length) {
        return;
    }
    values.forEach(value => {
        sum += Number(value.value);
    });
    const unlimitedRewards = sum * 1.1;
    const lifetimeRewards = sum * 1.2;

    const unlimitedRewardsLabel = document.getElementById("unlimitedRewardsLabel");
    unlimitedRewardsLabel.textContent = `${Math.floor(unlimitedRewards)}$`;
    const lifetimeRewardsLabel = document.getElementById("lifetimeRewardsLabel");
    lifetimeRewardsLabel.textContent = `${Math.floor(lifetimeRewards)}$`;

    const unlimitedRewardsProgress = document.getElementById("unlimitedRewards");
    unlimitedRewardsProgress.style.width = `${(unlimitedRewards / limit) * 100}%`;
    const lifetimeRewardsProgress = document.getElementById("lifetimeRewards");
    lifetimeRewardsProgress.style.width = `${(lifetimeRewards / limit) * 100}%`;
    const generalRewards = document.getElementById("generalRewards");
    generalRewards.style.display = "block";
}

function onBrand(brand) {
    if (brand === 'Brex')
        brandSum = sum * 1.3;
    else if (brand === 'Stripe')
        brandSum = sum * 2.9;
    else
        brandSum = sum * 1.3;

    const brandLabel = document.getElementById("brandLabel");
    brandLabel.textContent = `${brand}Business Card`;

    const brandRewardLabel = document.getElementById("brandRewardLabel");
    brandRewardLabel.textContent = `${Math.floor(brandSum)}$`;

    const brandRewardProgress = document.getElementById("brandReward");
    brandRewardProgress.style.width = `${(brandSum / limit) * 100}%`;

    const brandContainer = document.getElementById("brandContainer");
    brandContainer.style.display = "flex";

}