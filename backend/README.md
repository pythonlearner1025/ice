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

|         | type | description            |
|---------|------|------------------------|
| id      | int  | row id                 |
| chat_id | int  | id of chat file        |
| content | text | text of message        |
| imgs    | text | url to attached images |
| type    | text | 'user' \| 'model'      |


### history_nodes

|          | type  | description          |
|----------|-------|----------------------|
| id       | int   | row id               |
| chat_id  | int   | id of chat file      |
| parent   | int   | id of parent node    |
| children | array | ids of children      |
| text     | text  | text content of node |
| imgs     | text  | url to imgs of node  |