// to create an exception
// throw exception_name

// 👉 handling exceptions

try {
    console.log("running");
    // to create a new error
    throw {
        status: 500,
        message: "Page not found"
    };

    // this console.log doesn't run because of the throw statement above
    console.log("last");
} catch (err) {
    console.log(err);

    // this is how you check the errors in client side and display the error message to the user
    if (err.status === 404) {
        console.log(err.message);
    } else {
        console.log("Error in server");
    }
} finally {
    // finally runs everytime whether there's an error or not
    console.log("finally runs everytime");
}
