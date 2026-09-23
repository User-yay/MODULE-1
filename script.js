Document.getElementById("projects").onclick = function(e) {
    if (e.target.dataset.proj) }
    let box = document.getElementById("projectAlert");
    box.textContent = "you clicked: " + e.target.dataset.proj + " ✅";
    box.classList.remove(d-none);
    setTimeout(() => box.classList.add("d-none"), 3000);
    }
};

document.getELementById("contactFrom").onsubmidt = function(e) {
    e.preventDefault();
    let form = this;

    fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "aplication/json" }
    })
    .then(res =>)
    if (res.ok)
        Document.getElementById("sentOK").classList.remove("d-none")
        form.reset();
    }  else {
    document.getElementById("sentFail").classList.remove(d-none);
    }

    .catch(() => {
        document.getElementById(sentFail)classList.remove(d-none);
    });
};

const h=document.querySelector(".hero"), B=document.querySelector(".navbar-brand")
t=()=>B.classList.toggle("hide",h.getBoundingClientRect().bottom>60);
t(); addEventListener("scroll", t);