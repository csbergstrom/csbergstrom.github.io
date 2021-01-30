const auth_link = "https://www.strava.com/oauth/token"

function getActivities(res){

	const activities_link = `https://www.strava.com/api/v3/athelets?access_token=${res.access_token}`
	fetch(activities_link)
		.then((res) => console.log(res.json()))

}

getActivities()

function reAuthorize(){

	fetch(auth_link,{
		method: 'post',
		header: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
		},
		body: json.stringify({
			client_id: '60870'
			client_secret: 'eb48ccefa035fdebd390b1c24dc3222ff5e08ab9'
			refresh_token: '80919c93e0f3789349e9850e936192231d8169f8'
			grant_type: 'refresh_token'
		})
	}).then(res => res.json())
		.then(res => getActivities(res))
}
reAuthorize()