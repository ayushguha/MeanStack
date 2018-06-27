use bank
//2	Create index on primary key(s)
db.bank.createIndex({accountnumber:1},{unique:true});
db.bank.insert({
    accountnumber:1001,
    balance:800,
   customerDetails:{
            CustomerId:01,
            CustomerName:"ayush",
            street:"ShyamyaHills",
            city:"bhopal",
            loanAmount:1000,
            depositAmount:500
            },
   branchDetails:{
          BranchName:"piplani",
          BranchCity:"bhopal",
          Assets:10000
            
          }
})
db.bank.insert({
    accountnumber:1002,
    balance:850,
   customerDetails:{
            CustomerId:02,
            CustomerName:"anas",
            street:"kolar",
            city:"chennai",
            loanAmount:2000,
            depositAmount:600
            },
   branchDetails:{
          BranchName:"arera",
          BranchCity:"bhopal",
          Assets:5000
            
          }
})

db.bank.insert({
    accountnumber:1003,
    balance:550,
   customerDetails:{
            CustomerId:03,
            CustomerName:"ram",
            street:"nagar",
            city:"pune",
            loanAmount:3000,
            depositAmount:800
            },
   branchDetails:{
          BranchName:"C21",
          BranchCity:"pune",
          Assets:5000
            
          }
})

db.bank.insert({
    accountnumber:1004,
    balance:1000,
   customerDetails:{
            CustomerId:04,
            CustomerName:"ramanujan",
            street:"qwerty",
            city:"hyderabad",
            loanAmount:7000,
            depositAmount:500
            },
   branchDetails:{
          BranchName:"krtz",
          BranchCity:"hyderabad",
          Assets:5000
            
          }
})

db.bank.insert({
    accountnumber:1005,
    balance:750,
   customerDetails:{
            CustomerId:05,
            CustomerName:"tanay",
            street:"dlf",
            city:"chennai",
            loanAmount:1200,
            depositAmount:800
            },
   branchDetails:{
          BranchName:"manapakkam",
          BranchCity:"chennai",
          Assets:10000
            
          }
})

db.bank.insert({
    accountnumber:1006,
    balance:200,
   customerDetails:{
            CustomerId:06,
            CustomerName:"shubham",
            street:"dlf2",
            city:"pune",
            loanAmount:2000,
            depositAmount:5200
            },
   branchDetails:{
          BranchName:"cruise",
          BranchCity:"pune",
          Assets:9000
            
          }
})
db.bank.find()
db.bank.insert({
    accountnumber:1007,
    balance:899,
   customerDetails:{
            CustomerId:07,
            CustomerName:"thakur",
            street:"abc1",
            city:"indore",
            loanAmount:7000,
            depositAmount:600
            },
   branchDetails:{
          BranchName:"creta",
          BranchCity:"indore",
          Assets:30000
            
          }
})
db.bank.insert({
    accountnumber:1008,
    balance:1200,
   customerDetails:{
            CustomerId:08,
            CustomerName:"khan",
            street:"c31",
            city:"bhopal",
            loanAmount:5600,
            depositAmount:6000
            },
   branchDetails:{
          BranchName:"drone",
          BranchCity:"bhopal",
          Assets:46000
            
          }
})
db.bank.insert({
    accountnumber:1009,
    balance:1500,
   customerDetails:{
            CustomerId:09,
            CustomerName:"mishra",
            street:"236ind",
            city:"chennai",
            loanAmount:3000,
            depositAmount:5500
            },
   branchDetails:{
          BranchName:"uind",
          BranchCity:"chennai",
          Assets:90000
            
          }
})
db.bank.insert({
    accountnumber:1010,
    balance:1300,
   customerDetails:{
            CustomerId:10,
            CustomerName:"kohli",
            street:"xyz",
            city:"banglore",
            loanAmount:1000,
            depositAmount:600
            },
   branchDetails:{
          BranchName:"colony1",
          BranchCity:"banglore",
          Assets:5000
            
          }
})
db.bank.insert({
    accountnumber:1011,
    balance:1500,
   customerDetails:{
            CustomerId:11,
            CustomerName:"virat",
            street:"oppo",
            city:"orissa",
            loanAmount:0,
            depositAmount:900
            },
   branchDetails:{
          BranchName:"colony9",
          BranchCity:"orissa",
          Assets:1000
            
          }
})
db.bank.insert({
    accountnumber:1012,
    balance:1500,
   customerDetails:{
            CustomerId:11,
            CustomerName:"virat",
            street:"oppo",
            city:"orissa",
            loanAmount:0,
            depositAmount:900
            },
   branchDetails:{
          BranchName:"colony9",
          BranchCity:"pune",
          Assets:1000
            
          }
})
//2 Create index on primary key(s)
db.bank.createIndex({accountnumber:1},{unique:true});

//3 The names and cities of all borrowers. 
db.bank.find({"customerDetails.loanAmount": {$gt: 0.0}},{"customerDetails.CustomerName":1,"customerDetails.city":1})
//4 The names of borrowers who live in Chennai
db.bank.find({"customerDetails.loanAmount": {$gt: 0.0},"customerDetails.city":"chennai"},{"customerDetails.CustomerName":1})
//5 Find the name, city, and assets of the branch with the largest assets. 
db.bank.find({},{"branchDetails.BranchName":1,"branchDetails.BranchCity":1,"branchDetails.Assets":1}).sort({"branchDetails.Assets":-1}).limit(1)
//6 The names and cities of customers who have a loan at Pune branch. 
db.bank.find({"customerDetails.loanAmount": {$gt: 0.0},"branchDetails.BranchCity":"pune"},{"customerDetails.CustomerName":1,"customerDetails.city":1})
//7 Find the number of accounts with balances between 700 and 900. 
db.bank.aggregate([{$match:{balance:{$gte:700,$lte:900}}},{$count:"number of matched between 700 and 900"}])
//8 The names of customers with both deposits and loans at Pune branch. 
db.bank.find({"customerDetails.loanAmount": {$gt: 0.0},"customerDetails.depositAmount": {$gt: 0.0},"branchDetails.BranchCity":"pune"},{"customerDetails.CustomerName":1})
//9 The customers whose total loans are greater than the total amount in their bank accounts
db.bank.find({$expr:{$gt:["$customerDetails.loanAmount","$balance"]}},
{"customerDetails.CustomerName":1})
//10 The names of customers living on streets with names ending in "Hill". 
db.bank.find({"customerDetails.street":{$regex:"Hills$"}})
//11 The names of customers with an account but not a loan at Pune branch. 
db.bank.find({"customerDetails.loanAmount":0,"branchDetails.BranchCity":"pune"},{"customerDetails.CustomerName":1})
//12 The names of branches whose assets are greater than the assets of all branches in Hyderabad


//13 The branch with the largest average balance. 
db.bank.aggregate([{$group:{_id:"$branchDetails.BranchCity",avg_balance:{$avg:"$balance"}}},
{$sort:{avg_balance:-1}},
{$limit:1}])
//14 The branch name and number of customers for each branch
db.bank.aggregate([{$group:{_id:"$branchDetails.BranchName",count:{$sum:1}}}])
//15 Deposit an additional Rs. 20,000 to Ram’s bank account. 
db.bank.update({"customerDetails.CustomerName":"ram"},{$inc:{balance:20000}})
db.bank.find()


