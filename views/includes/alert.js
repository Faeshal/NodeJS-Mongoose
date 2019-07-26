<script>
function Delete() {
  event.preventDefault();
  var form = document.forms["myForm"];
  swal({
    title: "Are you sure?",
    text: "Data will be deleted",
    icon: "warning",
    buttons: true,
    dangerMode: true
  }).then(willDelete => {
    if (willDelete) {
      document.getElementsByName("productId").value;
      form.submit();
      swal("Succesfully Deleted", {
        icon: "success"
      });
    } else {
      swal("Cancel Delete");
    }
  });
}
</script>