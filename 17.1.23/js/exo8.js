var mail = prompt("enter your email").toLowerCase();
mail.split(" ");


if (mail.includes("gmail")==true) {
    mail = mail.replaceAll(".", "");
}

    alert (mail) 