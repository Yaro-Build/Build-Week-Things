const ApiService = {
    getUsersFromApi: async () => {
        return fetch ("http://localhost:8080/api/users")
            
            .then(response => response.json())
            .then(json => {
                console.log(json)
                var mappedData = [];
                json.map((user, index) => (
                    mappedData.push(
                        {
                            "id":user.id,
                            "name":user.name,
                            "start_date":user.start_date,
                            "location":user.location,
                            "job_title":user.job_title,
                            "bio":user.bio
                        }
                    )
                ))
                console.log(mappedData)
                return mappedData
    })
    }


}

export default ApiService

