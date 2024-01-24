# Store App - Module 1 Test

This is the application to test the knowledge gained in the first module of the ioet university 2.0.

The application stucture is the following:

```
- assets
    - CartLogo
    - Logo
- components
    - Filter
    - Modal
    - Navbar
    - ResultInfoBar
    - ResultTable
- contexts
    - SearchContext
```

### Run the application

Open your favourite terminal in the root and install the npm dependencies with:

```
npm install
```
Then run the following command to run the project on the local server:
```
npm run dev
```
You can also check the lint by running:
```
npm run lint
```

Keep in mind that there are various types of lind warnings. We advice to solve every warning in the way of possible.

### Advices to solve this tests

- Put all your focus here without ignore your health, go to sleep!!

- You are not forbidden to ask for help, remember that asking for help is what differentiates us from other companies.

- You can always learn something new, so try to extract as much knowlegde as you can

## Requirements

- Use rate values from the API to replace the fixed values on the UI. Remember to round the value to fit with the number of stars for the UI.

- Add “Add to cart” button to each product. This is just the visual button, the functionality should be added in another task.

- Fix the product's card size so that all can have the same size.

- Fix filters by price. This is currently not working.

- Fix the filter by category. The filter should apply when the category is selected. Remember to use the `category` attribute from the API.

- Fix the filters by rate so that the app can use the same rate from the API. The attriobute you should use is `rate` that is inside the attribute `rating`

- Create a component for the cart. [Here](https://www.figma.com/file/sABAS69warhZ3197HQmSyn/store?type=design&node-id=0%3A1&mode=design&t=APO0wcv7u2swFIC4-1) is the mockup of the cart. The implementation needs to match the design of figma and it should be functional.

> **Note:** This task can be divided into multiple subtasks. You can create as many as you need. If you create subtasks, you can create a notion page with the list of subtasks following the tickets creation standards. We will take into account this notion doc for your final score.

It is important to complete this task in order to complete the following tasks:
- Include the “Add to cart” function for each product.
- Include the “Remove from cart” funcion each product added to the cart.

For both tasks you can use the UseContext hook.
