SweetAlert = function () {
    var e = $('[data-toggle="sweet-alert"]');
    e.length && e.on("click", function (e) {
        switch ($(this).data("sweet-alert")) {
            case"basic":
                swal.fire({
                    title: "Here's a message!",
                    text: "A few words about this sweet alert ...",
                    buttonsStyling: !1,
                    confirmButtonClass: "btn btn-primary"
                });
                break;
            case"info":
                swal.fire({
                    title: "Info",
                    text: "A few words about this sweet alert ...",
                    type: "info",
                    buttonsStyling: !1,
                    confirmButtonClass: "btn btn-info"
                });
                break;
            case"success":
                swal.fire({
                    title: "Success",
                    text: "A few words about this sweet alert ...",
                    type: "success",
                    buttonsStyling: !1,
                    confirmButtonClass: "btn btn-success"
                });
                break;
            case"warning":
                swal.fire({
                    title: "Warning",
                    text: "A few words about this sweet alert ...",
                    type: "warning",
                    buttonsStyling: !1,
                    confirmButtonClass: "btn btn-warning"
                });
                break;
            case"question":
                swal.fire({
                    title: "Are you sure?",
                    text: "A few words about this sweet alert ...",
                    type: "question",
                    buttonsStyling: !1,
                    confirmButtonClass: "btn btn-primary"
                });
                break;
            case"confirm":
                swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    type: "warning",
                    showCancelButton: !0,
                    buttonsStyling: !1,
                    confirmButtonClass: "btn btn-danger mr-3",
                    confirmButtonText: "Yes, delete it!",
                    cancelButtonClass: "btn btn-outline-primary"
                }).then(t => {
                    t.value && swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        type: "success",
                        buttonsStyling: !1,
                        confirmButtonClass: "btn btn-primary"
                    })
                });
        }
    });
}();
