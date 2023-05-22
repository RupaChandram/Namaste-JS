### Execution Context

### Is JS synchronous or asynchronous?
### Is JS single-threaded or multi-threaded?

#### `Everything in JS happens inside an execution context`
* You can assume this execution context like a big box or a container in which whole js code is excuted.
* It has two components in it.
    - Memory Component
        - This is the place where all the variables and the functions are stored as a key-value pairs.
        - This memory component is also known as `variable environment`.
        - eg: key : value
                a : 10
                fn:{...}
    - Code Component
        - This is the place where code is executed one line at a time.
        - It's also known as Thread of Execution.
        - This thread of execution is like a thread in which the whole code is executed one line at a time.

#### `JS is a synchronous single-threaded language`
* Single threaded means JS can only execute one command at a time.
* Synchronous single-threaded means JS can only execute one command at a time in a `specific order`.
* So that means it can only go to the next line once the current line has been finished execution.

| Memory Component / Variable environment     | Code Component / Thread of execution   | 
|--------------|-----------|
| key:value | o-------    | 
| a:10      | o-------- |
| fn:{...}  | o------------ |



