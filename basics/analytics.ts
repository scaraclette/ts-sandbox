let logged; // okay for variables without declaring type because it's smart enough to guess the type upon declaration.

function sendAnalytics(data: string) {
    console.log(data);
}
console.log('analytics!');