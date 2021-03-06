import { IChapterInstruction } from '../../../../typings';

const l1 = `
## Lesson 1: Contract declaration

**Declaring a contract:**

Let’s begin from the basics.
The contract that you’ll be deploying to the blockchain has to have a name by which it could later be identified.
The format for specifying is simply

\`\`\`
contract [ContractName]
\`\`\`

Where you replace the \`[ContractName]\` with the actual name for your contract.

Do note that the contract name has to start with a capital letter.

## Task

Declare a contract called \`Zealgame\`.

`;
const l2 = `
## Lesson 2: Immutable variables

Any contract deployed on the blockchain is immutable.
In other words, that code can’t be changed
(this is one of the main reasons why security of smart contracts is a fundamental concern from the very start of the coding stage, or perhaps even before that.)

While deploying the contract on the blockchain, you can also initiate certain parameters which will be permanently fixed at their initial values.
These are called Immutable variables.

For eg. you may want to store a wallet address (which can serve like an identity, just like unique email addresses) as the address of the owner.
You can then use this immutable variable as a check so that certain functions in the contract can only be carried out by the owner.
The format for specifying an immutable variable is:
\`\`\`
contract ContractName
(variablename1 : variabletype1)
\`\`\`
Where \`variablename1\` and \`variabletype1\` can be replaced by the chosen variable name and type.

If there are multiple immutable variables, then you can include them as follows:
\`\`\`
contract ContractName
(
    variablename1 : variabletype1,
    variablename2 : variabletype2,
    variablename3 : variabletype3
)
\`\`\`
Here, multiple immutable variables are declared by separating them with commas.
The language supports several datatypes, such as  \`Int32\` (to represent 32-bit integers),
\`ByStr20\` ( a sequence of hexadecimal characters that represents 20 bytes).
\`ByStr20\` is a datatype used to represent account addresses. A detailed list will be provided later in the tutorial.

There are many such data types in Scilla with different types of declaration and that is intentional so that later automated checks on the program can be run more easily.

As Robin Milner once said: *"Well typed programs don’t go wrong"*

We’ll only be introducing some of the data types through these tutorials.
For a detailed list of all the types, kindly refer to the 'cheat sheet' in the navigation menu above.

## Task

Declare a contract called \`Zealgame\`. It should have one immutable variable with the name \`owner\` and should be of type \`ByStr20\`

`;
const l3 = `
## Lesson 3: Mutable variables

Any program is usually divided into three parts, the first is taking some input, the second is doing some operations based on the input and other data in its memory or code and the third is providing some result as an output.

For the second stage i.e. doing operations on data, we usually need to have variables whose value will be changed by the code in the contract.

These variables, which can be updated but are still stored on blockchain are known as the mutable variables.

At this points, new students often ask how you can store something mutable on an immutable blockchain. The answer is that what remains immutable is the history of how that variable’s value changed over the time. But only the latest value is actually considered by the program to be the true value of the variable.

For eg. If you had USD 100 at the beginning of the month and spent USD 40 by the end of it then the bank will have a clear transaction history which you can’t change even though you can certainly change your current balance by earning or spending more money. In this example your balance is a mutable variable but the balance-sheet itself is immutable.

To declare a mutable variable, we need to pay attention to three things:-
Variable name: This is the identifier of the variable to be used by various operators later in the contract.
Variable type: Choose the appropriate type of the variable. Such as \`Uint128\` for amounts, String for names, \`ByStr20\` for addresses etc.
Variable value: We may choose to declare a variable with or without an initial value.

The format for the mutable variable declaration might slightly vary depending on the variable type and variable value. You can access the list of the most important permutations in the variable declarations in the cheat sheet given in the navigation menu. For now, let’s look at the format for a simple mutable variable that will contain a text/string value.


\`\`\`
field [Variable Name] : [Variable Type] = "[Variable Text]"
\`\`\`
Eg.
\`\`\`
field a : String = "hello"
\`\`\`
The important thing to know is that in the smart contract security, changing the value of a mutable variable is a very important step and if done wrong,
such a change could inadvertently result in major security vulnerabilities.

We’ll see later how that issue can be handled in a methodical way in Scilla.


## Task

Let’s start with having a simple variable that stores the name of a player.
Declare a variable with following details:
* Variable name: \`player_name\`
* Variable type: \`String\`
* Variable value: \`Alice\`
`;

const l4 = `
## Lesson 4: Transition

The smart contract code on blockchain needs some interfaces so that the commands,
information or tokens can be sent to the smart contract or be requested from it.
Transitions are similar to functions or methods in other languages.
A transition is declared using the keyword transition. The end of a transition scope is declared using the keyword end.
The transition keyword is followed by the transition name. Then follows the input parameters within (). Each input parameter is separated by a , and is declared in the following format: variablename : variabletype

The format is:
\`\`\`
transition [transitionname] (variablename : variabletype)
end
\`\`\`
Example:
\`\`\`
transition setHello (msg : String)
end
\`\`\`
In order to use a smart contract, a transition within the smart contract will have to be called.
It can be called directly or by another program or smart contract.

## Task

So far, we have a fixed value for our playername variable, which is "Alice".
Let’s have an option that the name could be changed. To change a mutable variable, we’ll need a transition.

Declare a transition with the name \`changeName\`.
You don’t need to pass any variables to it right now, so the brackets after the name will be empty.

There will be no code in the body of the transition at the moment.
We’ll fill it in later. For now, just declare an empty transition named \`changeName\`,
and close it by using the keyword \`end\`
`;

const l5 = `
## Lesson 5: Declaring a temporary variable

We can also declare variables with a transition.
Do note that these variables are not immutable variables nor are they mutable variables
even though their values can be changed. This is because their value is never stored in the blockchain.
Rather they are temporary variables whose scope is limited within the transition for the duration of that single call.

The variable declaration format is different from the way that mutable variables are declared.
For instance, a String variable is declared in the following format:
\`\`\`
{varibale name} = {value}
\`\`\`
Example:
\`\`\`
a = "hello"
\`\`\`

**Note:**
In a transition, if there are multiple lines, then they are separated by \`semicolons\`.
Let’s take a look at an example of a transition with two variables declared in it:

Example:
\`\`\`
Transition foo()
    a= "hello"
    b= Int32 5
end
\`\`\`
In this example, we declare two variables in a transition named "foo".
The first variable is a string type variable that stores the value hello.
The second variable is an integer type variable that stores the value 5.

Notice two things in this example:
The two lines within the transition are separated by a single semicolon.
We don’t use a semicolon after the declaration of the variable "b" because there are no further lines in the transition seen in the example.
The format of the declaration of a String variable is different from the format of declaration of an integer variable.
You can find the full list of the declaration format of all the major variable types (in the main body of the contract, and in the transition) in the link below:
Link: -------------

## Task

We want to replace the original player name declared in mutable variable \`player_name\` in this transition. To do that, we will need a new name.

Declare a new variable with the name \`newname\` and type \`String\` and give it a value \`Bob\`.

`;
const l6 = `
## Lesson 6: Changing a mutable field

As stated earlier, the variable declared in the transition is a temporary variable that isn’t stored in the blockchain
and exists for the duration that the transition is called.
In order to ensure that the value is stored in the blockchain,
it has to be transferred to a mutable variable.
Changing a mutable variable is a significant operation and if done in a wrong manner,
it could lead to security issues for the smart contract.
We’ll explore this in more detail in the later lessons.
At the moment, we simply need to assign the value of the temporary variable to the mutable variable.
The format of such an assignment is:
\`\`\`
{mutable variable name} := {temporary variable name}
\`\`\`
Eg.
\`\`\`
mutvar1 := tempvar1
\`\`\`

## Task

Update the mutable variable \`player_name\` with the value of the temporary variable \`newname\` in the body of the transition.

`;
const l7 = `
## Lesson 7: Getting values

You’ll notice the issue with the previous chapter that the new player is always changed to a fixed value each time that the transition is called.
Ideally, we’ll like to have options other than "Bob" about the new name which is updated. This can be done by letting the user pass on a value to the transition whenever she’s calling it.
Similar to how we could have passed variables to the contract while creating it, we could also pass variables to a transition while calling it.
The format for declaring these temporary variables- that have to be sent by a user when she calls the transition- is as follows:
\`\`\`
Transition {transition name} (
    {variable name_1} : {variabe type_1}
)
    ...
end
\`\`\`


In case we want to declare multiple variables here, then we can do so by separating the variable name and variable types by commas, as shown below:
\`\`\`
Transition {transition name} (
    {variable name_1} : {variabe type_1},
    {variable name_2} : {variabe type_2},
    {variable name_3} : {variabe type_3}
)
  ...
end
\`\`\`
Example:
\`\`\`
Transition foo (
    var1: String,
    var2: Int32,
    var3 Uint32
)
end
\`\`\`

## Task

We want to change the name of the player ‘Alice’ that we’ve earlier stored in the mutable variable \`player_name\`. To do this, we created the transition \`changeName\` and assigned a fixed value variable declared there to \`player_name\`.
In order to make the change more flexible, we’ll also need the new name each time the transition is called. So, we’ll delete the old variable declaration in the body of the transition.
Now, include the parameter with name \`newname\` and variable type \`String\` in the declaration of the transition so that a user has to send a new name for the player each time she wishes to change the old value.
`;
const l8 = `
## Lesson 8: Implicit variables

In addition to parameters that are explicitly declared in the definition, each transition has available to it, the following implicit parameters:

The account address that triggered this transition. In case, the transition was called by a contract account instead of a user account, then _sender is the contract address.
\`\`\`
_sender : ByStr20
\`\`\`

Incoming amount (ZILs) sent by the sender. This amount must be explicitly accepted using the accept statement within the transition. The money transfer does not happen if the transition does not execute accept.
\`\`\`
_amount : Uint128
  \`\`\`

## Task

Declare two new mutable variables in the contract:
* \`player_address\` of type \`ByStr20\` with value \`0x1234567890123456789012345678901234567890\`
* \`player_zeal\` of type \`Uint128\` with value \`0\`

Then in the transition, assign these variables the value of \`_sender\` and \`_amount\` respectively.

As mentioned earlier, you can refer to the variable declaration format of all types in the link below. [Link]
`;
const l9 = `
## Lesson 9: Summary

Chapter Number and title: Summary
Lesson contents (includes the task at the end)
Congrats!
You’ve learned:
* how to declare a new contract,
* how to declare a new transition,
* how to declare immutable variables,
* how to declare mutable variables,
* how to declare temporary variables in the transition,
* how to use the implicit variables in a transition,
* how to change the value of mutable variables in the transition.

You’ve learned the general structure of a contract which looks like the following:
(* Scilla contract structure *)

\`\`\`
(***************************************************)
(*               Associated library                *)
(***************************************************)

library MyContractLib


(* Library code block follows *)



(***************************************************)
(*             Contract definition                 *)
(***************************************************)

contract MyContract

(* Immutable fields declaration *)

(vname_1 : vtype_1, vname_2 : vtype_2)

(* Mutable fields declaration *)

field vname_1 : vtype_1 = init_val_1
field vname_2 : vtype_2 = init_val_2

(* Transitions *)

(* Transition signature *)
transition firstTransition (
    param_1 : type_1,
    param_2 : type_2
)
    (* Transition body *)
end

transition secondTransition (param_1: type_1)
    (* Transition body *)
end
\`\`\`

You’ve defined a player which has certain attributes such as name, address and a game specific stat called zeal.
However, we wouldn’t want to repeat these steps for every single player.
We need a way to store and retrieve a bunch of similar data.
In the next lesson, we’ll see how to use maps to do that.
`;

const chapter1: IChapterInstruction = {
  title: 'Elementary',
  lessons: [l1, l2, l3, l4, l5, l6, l7, l8, l9]
};

export default chapter1;
