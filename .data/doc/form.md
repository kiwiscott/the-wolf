#form
The form is a simple document represented in json.
 
##describing the form
A base form has the following syntax

    {
        "version" : 1,
        "href" : "http://example.org/friends/",
       "template" :
        {
            "id" : "Ce3wr42qwd",
           "href" : "http://example.org/friends/",
           "name" : "Packaged Phone-Phone Set, Phone Line and Voicemail Add",  
           "description" : "This is how we can use this service etc.... ",    
           "errors": [
            {
                   "name": "existing-phone",
                  "message" : "This is where we can put some nice message foer the user "
            }
            ],
     "data" :[   
      {
         "gooddate":
            {
                "value": "08-10-2020",
                "type": "date",
                "validation": {
                    "requiredWhen": 'always'
                }
            },
            "middle": {
                "value": "50",
                "type": "number",
                "validation": { "requiredWhen": 'always', "minimumValue": 0, "maximumValue": 100 }
            }, [additional fields]    
         ]
      }
    }

###header
+ **id** is the version of the API in use. This is for future proofing
+ **href** is the namespace for this document. Its also a link where you can find the format definition 
+ **template**. This is the root element for the definition of the form. There are currently only examples of one form but we may extend that to include many forms in which case this will be an array

###template
+ **id** is the unique identifier of the form. Its an alpha numeric form which is limited to 50 characters
+ **href** is the namespace for this document. Its also a link where you can find the format definition 
+ **name**. This is the name for the template. This is designed to be shown to users and is a definition of the service they are ordering or the action they are taking.
+ **description**. This is a user friendly definition of the form in long form.
+ **errors**. When you request a form this element will be null. In JS terms this could mean the element is missing. It will only be populated if the request for validation fails
+ **data**. This is a definition of the fields of the form and is a dictionary (not an array). There will always be at least one element on the form but it may be a hidden element not visible to the user. 

####Describing the field elements - the data element
The data element represents one of a number of field types. The field types currently include string, date, datetime, lookup, number, oneOf. The types have the same basic structure: 

    "gooddate": { 
        "value": null, 
        "label": "08-10-2020",    
       "type": "date", 
       "validation": { 
                   "requiredWhen": 'always' 
        }
    },
+ **string** is the name of the field. This is not intended to be displayed to users but is informative for debugging and matching for validation
+ **value** is a placeholder for the value or the field. It will be either null or a string value indicating a default value for this instance of the form. For example you may be asking to change the users mailbox quota. This may indicate the next best choice for that user.
* **label** is the display name of the field. It is required and will be a string. 
* **type** indicates which field type that this is from the following options (more types will be added overtime)
  * string - used for all values that are simple strings.
  * date - used for simple dates values only that do not include a time element.
  * datetime - used for date values that include a time element
  * lookup - used to provide access to a list of values where  the items in the list are queried via another API callback. This is used for searching large datasets like the list of users that we could add to a group in AD. 
  * oneOf - used to represent a simple list of data where one option is required to be chosen
  * number - used to represent a simple number value as an integer.
* **validation** indicates the validations options for this specific type. Each options validation could be different. This is always required. 

#####string type
    "email":
      {
        "value": "scott@scott.com",* **validation** is an object describing the validation for a string
        "type": "string",
        "validation": {
          "pattern": "^([0-9a-zA-Z]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$",
          "mask": "user@jpmchase.com",
          "requiredWhen": '',
          "visibleWhen": ''
        }
      }

* **value** represents the value for the type
* **type** is always string 
* **validation** is an object describing the validation for a string
 * **pattern** is a regex expression describing the format of the string required. NOT REQUIRED
 * **mask** is a sample value indicating the format for the user. NOT REQURIED
 * **visibleWhen** NOT REQUIRED. This is an indicator of whether the field should be shown to the user and is used in conjuction with the requiredWhen property.
 * **requiredWhen** NOT REQUIRED. This is an indicator of whether the field is required or not. See required when for more information.  

**visibleWhen and requiredWhen**
The format of visibleWhen is to indicate that the field should be visible when other values are selected. It it's not specified the field should always be displayed. It will be in the form of a 'test'. 

The format of the requiredWhen element is either 'always' which means it's always required or in the format of a test.

Both the requiredWhen and visibleWhen syntax can be a ##test##. The syntax is a simple s test format such as *"x-greeting === 'Cool'"*. The "x-" indicates that this is a value of a property on the form. Therefore *"x-greeting === 'Cool'"* indicates this is required when the property greeting equals Cool.  
  
This test can be a more complicated test, such as, "x-greeting==null||x-name==null". The format is a parsable javascript test and validation can be performed via a simple evaluation of the form. Here's a sample function we use to validate turn the string into a valid js test and set the required value.  

    function createRequiredWhenTest(requiredWhen, template) {
        var temp = requiredWhen;
        for (var m in template.data) {
            temp = temp.replace('x-' + m, 'x.' + m + '.value');
        }
    
        var requiredWhenTest = "function t(x) { return " + temp + ";}";
        return requiredWhenTest;
    } 
    
    var test = createRequiredWhenTest(field.validation.requiredWhen, template);
    var required = eval(test);

  
 
#####date type
    "gooddate":
      {
        "value": "08-10-2020",
        "type": "date",
        "validation": {
          "requiredWhen": 'always'
        }
      }
      
* **value** represents the value for the type. The expected format is null or 'MM-DD-YYYY'. No other formats will be validated as passing. 
* **type** is always date 
* **validation** is an object describing the validation
 * **requiredWhen** NOT REQUIRED. This is an indicator of whether the field is required or not. See required when for more information. 
 * **visibleWhen** NOT REQUIRED. This is an indicator of whether the field should be shown to the user and is used in conjuction with the requiredWhen property. 
 
#####datetime type
    "gooddate":
      {
        "value": "2010-01-01T05:06:07",
        "type": "datetime",
        "validation": {
          "requiredWhen": 'always'
        }
      }
      
* **value** represents the value for the type. The expected format is null or ISO_8601 date format. See [https://en.wikipedia.org/wiki/ISO_8601]. 
* **type** is always datetime 
* **validation** is an object describing the validation
 * **requiredWhen** NOT REQUIRED. This is an indicator of whether the field is required or not. See required when for more information. 
 * **visibleWhen** NOT REQUIRED. This is an indicator of whether the field should be shown to the user and is used in conjuction with the requiredWhen property. 
 
#####lookup type
    "lookupWithCategory":
      {
        "value": "96",
        "type": "lookup",
        "validation": {
          "requiredWhen": 'always',
          "lookupType": 'azure',
          "lookupParent" : "x-category"
        }
      }
           
* **value** represents the value for the type. It is expected to be a value from the lookup service  
* **type** is always lookup 
* **validation** is an object describing the validation
 * **lookupType** is the type of lookup that you are perfirming. This value is passed into the lookup API to indicate which type you lookup. See the API documentation to understand the lookup.
 * **lookupParent** is the field in the payload that we use as another lookup. If this value exists then its inferred that to do the lookup you need to know the value of the other field. An example is knowing the country or state before you select city. 
 * **requiredWhen** NOT REQUIRED. This is an indicator of whether the field is required or not. See required when for more information. 
 * **visibleWhen** NOT REQUIRED. This is an indicator of whether the field should be shown to the user and is used in conjuction with the requiredWhen property. 
 
  
  * oneOf - used to represent a simple list of data where one option is required to be chosen
  * number - used to represent a simple number value as an integer.
  
  
#####oneOf type
    "one":
      {
        "value": "Cisco",
        "type": "oneOf",
        "validation": {       
          "options": [
            { "value": "Cisco" },
            { "value": "Other" }
        }
        ]
      }
           
* **value** represents the value for the type. It is expected to be a value from the options section  
* **type** is always lookup 
* **validation** is an object describing the validation
 * **options** is the list of available options to use for this value. This isn't intended to be used for anything over 50 values. The data is presented as an array or objects. For the objects the only required field is value. This value field is the field that represents the key. See more below. 
 * **requiredWhen** NOT REQUIRED. This is an indicator of whether the field is required or not. See required when for more information. 
 * **visibleWhen** NOT REQUIRED. This is an indicator of whether the field should be shown to the user and is used in conjuction with the requiredWhen property. 
 
**options**

    "options": [
        { "value": "c123454", name:"Bob Brownlee Reynolds", lob:"Technology", address:"Vatican City, Rome" },
        { "value": "x123455",, name:"Bob Brownlee", lob:"Corporate Finance ", address:"St. Pauls Sq, London" }
    }

The options section will always have a value column and may have other columns associated. These other columns are intended
to provide some context about the value being selected but are NOT REQUIRED. In the example above the extra colums let you choose Bob from the Vatican rather than Bob from St. Pauls.   

#####number type
    "middle": {
        "value": "50",
        "type": "number",
        "validation": {
          "requiredWhen": 'always',
          "minimumValue": 0,
          "maximumValue": 100
        }
      },
           
* **value** represents the value for the type. It can be null if not required. This is assumed to be an whole number.
* **type** is always lookup 
* **validation** is an object describing the validation
 * **minimumValue** is the minimum value allowed. 
 * **maximumValue** is the maximum value allowed.
 * **requiredWhen** NOT REQUIRED. This is an indicator of whether the field is required or not. See required when for more information. 
 * **visibleWhen** NOT REQUIRED. This is an indicator of whether the field should be shown to the user and is used in conjuction with the requiredWhen property. 

