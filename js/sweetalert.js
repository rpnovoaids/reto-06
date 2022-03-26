function vaciarSweetAlert() {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Su carrito ha sido vaciado",
        showConfirmButton: false,
        timer: 2000
      })
}
function comprarSweetAlert() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
        title: "¿Desea realizar la compra?",
        text: "Confirme para continuar o cancelar la transacción",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, continuar",
        cancelButtonText: "No, cancelar",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
            "Compra realizada",
            "Su compra ha sido realizada con éxito",
            "success"
        )
        } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
        ) {
        swalWithBootstrapButtons.fire(
            "Cancelada",
            "Puede seguir comprando",
            "error"
        )
        }
    })
}
