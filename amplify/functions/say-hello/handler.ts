import type { Schema } from "../../data/resource";


export const handler: Schema["sayHello"]["functionHandler"] = async (event) => {
  // arguments typed from `.arguments()`
  const { name, email, phone, message } = event.arguments
 
  try {
    const response = await fetch('https://blog.expertbrokers.com.au/api/site/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer w160947c9a16c4c7a81ed844af7632867', // if needed
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        tags: ['website-lead'],
        subscribed: true,
        properties: [
            {
            name: "message",
            value: message,
            },
        ]
      }),
    });

    const data = await response.json();

    return {
      message: data,  // or data.message depending on response structure
      success: response.ok,
    };

  } catch (error) {
    return {
      message: error instanceof Error ? error.message : 'Unknown error',
      success: false,
    };
  }


}