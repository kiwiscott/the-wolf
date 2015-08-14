#api
The rest api exposes the following 'routes'
 
##Dealing with Forms
### GET /api/form/:form_id
Used for getting a form
* :form_id is expected to be a valid form id
####response 
* 404 - Body : {"code" : 404, "message": "Form not found"} 
* 200 - Body : application/vnd.wolfschema+json

*Example test form /api/form/Ce3wr42qwd*

### POST /api/form/:form_id
Used for submitting a form
* :form_id is expected to be the valid form id
* the request body should contain application/vnd.wolfschema+json
####response 
return res.status(422).send(form);
* 422 - Validation has failed form return with validation errors - Body : application/vnd.wolfschema+json
* 404 - Form is in invalid id - Body : {"code" : 404, "message": "Form not found"} 
* 200 - Submission sucessful. A new form may have been returned. Body : application/vnd.wolfschema+json


##Validating Look ups

### GET /api/lookup/:lookup_id?v=[key]
Used for validating a single value from the lookup
* :lookup_id is expected to be the valid lookup id and can be found via the form values
* [key] is expected to be the validation key you want to validate

####response 
* 404 - Body : {"code" : 404, "message": "Form not found"} 
* 200 - Body : json object that can have any number of fields but will ALWAYS have a value field. Consider the value valid if a single object is returned. 
    e.g. [{"value":"Apple", "Description" :"I prefer apple computers"}

*Example unsuccessful key validation get /api/lookup/azure?v=10000*  

        Response : []

*Example successful validation /api/lookup/azure?v=69*

        Response : [
        {
            "value": "69",
            "Title": "Oedipus the King",
            "Author": "Sophocles",
            "Country": "Greece",
            "Published": "(496-406 BC)",
            "UploadTime": "2015-08-14T00:00:00.000Z",
            "TotalViews": 7
        }
        ]
        
*Example test get /api/lookup/azure?v=99

    Response: [
                {
                    "value": "99",
                    "Title": "Wuthering Heights",
                    "Author": "Emily Brontë",
                    "Country": "England",
                    "Published": "(1818-1848)",
                    "UploadTime": "2015-08-14T00:00:00.000Z",
                        "TotalViews": 7
                 }
               ]

### GET /api/lookup/:lookup_id?v=[key]&c=[category]
Used for validating a single value from the lookup within a specific category
* :lookup_id is expected to be the valid lookup id and can be found via the form values
* [key] is expected to be the validation key you want to validate
* [category] is expected to be the category you want to validate in. 

####response 
* 404 - Body : {"code" : 404, "message": "Form not found"} 
* 200 - Body : json object that can have any number of fields but will ALWAYS have a value field. Consider the value valid if a single object is returned. If null no match was found.  
    e.g. [{"value":"Apple","country":"USA" "Description" :"I prefer apple computers"}

*Example unsuccessful key validation get /api/lookup/azure?v=96&c=Ireland*  
        Response : []
*Example successful validation /api/lookup/azure?v=69&c=Greece*

        Response : [
        {
            "value": "69",
            "Title": "Oedipus the King",
            "Author": "Sophocles",
            "Country": "Greece",
            "Published": "(496-406 BC)",
            "UploadTime": "2015-08-14T00:00:00.000Z",
            "TotalViews": 7
        }
        ]


##Searching Look ups

### GET /api/lookup/:lookup_id?q=[value]
Used for query lookup values 
* :lookup_id is expected to be the valid lookup id and can be found via the form values
* [value] is the string you want to search across the object for. 

####response 
* 404 - Body : {"code" : 404, "message": "Form not found"} 
* 200 - Body : json object that can have any number of fields but will ALWAYS have a value field. Consider the value valid if a single object is returned. 
    e.g. [{"value":"Apple", "Description" :"I prefer apple computers"}

*Example test get /api/lookup/azure?q=Op - This will return 5 books searching any of the fields for a case-insentive match

        Response : [
            {
                "value": "19",
                "Title": "Complete Poems",
                "Author": "Giacomo Leopardi",
                "Country": "Italy",
                "Published": "(1798-1837)",
                "UploadTime": "2015-08-14T00:00:00.000Z",
                "TotalViews": 7
            },
            {
                "value": "35",
                "Title": "Gilgamesh Mesopotamia",
                "Author": "Unknown",
                "Country": "Unknown",
                "Published": "(c 1800 BC)",
                "UploadTime": "2015-08-14T00:00:00.000Z",
                "TotalViews": 7
            },
            {
                "value": "45",
                "Title": "Independent People",
                "Author": "Halldor K Laxness",
                "Country": "Iceland",
                "Published": "(1902-1998)",
                "UploadTime": "2015-08-14T00:00:00.000Z",
                "TotalViews": 7
            },
            {
                "value": "51",
                "Title": "The Life and Opinions of Tristram Shandy",
                "Author": "Laurence Sterne",
                "Country": "Ireland",
                "Published": "(1713-1768)",
                "UploadTime": "2015-08-14T00:00:00.000Z",
                "TotalViews": 7
            },
            {
                "value": "69",
                "Title": "Oedipus the King",
                "Author": "Sophocles",
                "Country": "Greece",
                "Published": "(496-406 BC)",
                "UploadTime": "2015-08-14T00:00:00.000Z",
                "TotalViews": 7
            }
         ]

### GET /api/lookup/:lookup_id?q=[value]&c=[category]
Used for query lookup values within a specific value. The category field has been specified up front in the configuration of the lookup.
* :lookup_id is expected to be the valid lookup id and can be found via the form values
* [value] is the string you want to search across the object for. 
* [category] is expected to be the category you want to query in.
 
####response 
* 404 - Body : {"code" : 404, "message": "Form not found"} 
* 200 - Body : json object that can have any number of fields but will ALWAYS have a value field. Consider the value valid if a single object is returned. 
    e.g. [{"value":"Apple", "Description" :"I prefer apple computers"}

*Example test get /api/lookup/azure?q=Op&c=Greece - This will return 1 books searching any of the fields for a case-insentive match ONLY in the country Greece, which was the defined category.

        Response : [
            {
                "value": "69",
                "Title": "Oedipus the King",
                "Author": "Sophocles",
                "Country": "Greece",
                "Published": "(496-406 BC)",
                "UploadTime": "2015-08-14T00:00:00.000Z",
                "TotalViews": 7
            }
        ]

##Admin of Forms - (To be completed)
### GET /api/admin/:form_id
Used for getting a form for admin purposes
* :form_id is expected to be a valid form id
####response 
* 404 - Body : {"code" : 404, "message": "Form not found"} 
* 200 - Body : application/vnd.wolfschema+json

*Example test form /api/admin/Ce3wr42qwd*

### POST /api/admin/:form_id
Used for updating a form
* :form_id is expected to be the valid form id
* the request body should contain application/vnd.wolfschema+json
####response 
return res.status(422).send(form);
* 422 - Validation has failed form return with validation errors - Body : application/vnd.wolfschema+json
* 404 - Form is an invalid id - Body : {"code" : 404, "message": "Form not found"} 
* 200 - Change sucessful. Body : application/vnd.wolfschema+json
