--ข้อ1.)Write a query to see a list of all employees working at Chrome & Burger.
--SELECT * FROM orderitems;

--ข้อ2.)Write a query to find all menu items that fall under the 'Burger' category.
--SELECT * FROM Menuitems
--WHERE category = 'Burger';

--ข้อ3.)Write a query to show all menu items, but list them from the most expensive to the least expensive.
--SELECT * FROM menuitems
--ORDER BY price DESC;


--ข้อ4.)Write a query to find the three cheapest items available on the menu.
--SELECT name, price
--FROM MenuItems
--ORDER BY price ASC
--LIMIT 3;


--ข้อ5.)Write a query to find all menu items that require 'Beef Patty' as an ingredient.
SELECT * FROM Recipeitems 
JOIN Ingredients ON Recipeitems.ingredient_id = Ingredients.ingredient_id --fill to relation table Recipeitems and Ingredients by ingredient_id
WHERE Ingredients.name = 'Beef Patty'; -- fill to fimd all menu items that require 'Beef Patty' as an ingredient.
