# get-a-ray-id

get-a-ray-id is an micro-API designed to generate unique Cloudflare Ray IDs. These Ray IDs can be used for various purposes, such as tracking requests and debugging issues in a distributed system. The API ensures that each Ray ID is unique and follows the format used by Cloudflare.

- Generates unique Cloudflare Ray IDs.
- Easy-to-use RESTful API.
- High performance and lightweight.
- Suitable for tracking and debugging purposes.

### Example Request

To generate a new Ray ID, send a GET request to the `/generate` endpoint:

```bash
curl https://get-a-ray-id.alanjames6282.workers.dev
```

- Response:

```json
{
	"rayId": "893cca79fda59fd6"
}
```
