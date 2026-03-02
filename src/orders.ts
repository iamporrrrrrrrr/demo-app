 def get_orders():
     query = "SELECT * FROM orders WHERE"
     query += " user_id = ?"
     return execute_query(query)