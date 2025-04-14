
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Protected page</title>
  <style type="text/css">
    td { width: 150px; border: 1px solid #cccccc; }
  </style>
  <script type="text/javascript">
    function validate() {
        // var expr = /^[a-zA-Z]*$/
        // var token = document.getElementById("keyword").value;
        // if(!expr.exec(token)) {
        //     alert("Invalid search term !");
        //     return false;
        // }
        return true;
    }
  </script>
</head>
<body>
  <section class="container">
    <h1>Welcome user2!</h1>
    This page is protected by authentication.<br/><br/>

    
    No results found for your search on 
    <p>
      <form name="message_form" id="message_form" method="post" onsubmit="return validate()" action="index.php">
        <strong>Search for records: </strong><br/>
        <input type="text" style="width: 400px" id="keyword" name="keyword" value placeholder="keyword" /><br/>
        <input type="submit" value="submit" />
      </form>
    </p>

    <a href="index.php?c=logout">Logout</a>

  </section>
</body>
</html>
