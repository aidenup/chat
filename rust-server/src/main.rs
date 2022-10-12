use rocket::{get, routes, post};

#[get("/")]
async fn hello() -> String {
	"hello world!".to_string()
}

#[get("/ex")]
async fn get_ex() -> String {
	"ex".to_string()
}

#[post("/ex")]
async fn post_ex() -> String {
	"ex".to_string()
}

#[rocket::main]
async fn main() -> Result<(), rocket::Error> {
	let _rocket = rocket::build()
			.mount("/hello", routes![hello])
			.mount("/base", routes![post_ex, get_ex])
			.launch()
			.await?;
	Ok(())
}