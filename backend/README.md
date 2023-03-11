# Backend for Ice

A Python API for Ice. 

# API 

The API handles all user actions that require interaction with generative models. 

### Models to use

What generative models to use. TBD. 

# Database

There are two tables in the database:

- chat_lines
- history_nodes

chat_lines records all chat messages for all chat files. history_nodes records all nodes for all history files. 

### chat_lines

Records all messages between user and model in each chat_file. 

|         | type | description            |
|---------|------|------------------------|
| id      | int  | row id                 |
| chat_id | int  | id of chat file        |
| content | text | text of message        |
| imgs    | text | url to attached images |
| type    | text | 'user' \| 'model'      |


### history_nodes

Records the history nodes. History nodes are either of type action or output. Action nodes represent user requests to create a new output, or edit a past output. Output nodes represent model generations in response to a user action. The table captures the tree structure of the history nodes. 

*Implementation will follow closure table design (https://stackoverflow.com/questions/192220/what-is-the-most-efficient-elegant-way-to-parse-a-flat-table-into-a-tree/192462#192462).*

|          | type  | description          |
|----------|-------|----------------------|
| id       | int   | row id               |
| chat_id  | int   | id of chat file      |
| parent   | int   | id of parent node    |
| children | array | ids of children      |
| payload  | json  | payload of node      | 