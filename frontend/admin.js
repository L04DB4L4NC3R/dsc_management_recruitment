$("#pass").on("click",(e)=>{
    e.preventDefault();
    $.ajax({
        url:"/login",
        data:JSON.stringify({
            passphrase:$("#passphrase").val()
        }),
        contentType:"application/json",
        method:"POST",
        success:(data)=>{
            if(!data.token)
                alert("Wrong passphrase")
            else{
                localStorage.setItem("token",data.token)
                $("#first").html(`
                <div class="row">
                      <div class="input-field col s6">
                        <input placeholder="Enter year (empty for all)" id="year" type="number" class="validate">
                      </div>
                    </div>
                     
                    <center><button id="getbtn" class="btn waves-effect waves-light" type="submit" name="action">Submit
                    </button></center>
                    <br>
                    <center><button id="logout" class="btn waves-effect waves-light" name="action">logout
                    </button></center>
                    <div id="result"></div>

                    <script>


                    $("#logout").on("click", (e)=>{
                        e.preventDefault();
                        localStorage.clear();
                        $("#first").html("Logged out");
                        window.location.replace("/admin");
                    })

                    $("#getbtn").on("click",(e)=>{
                        $("#result").html('');
                        e.preventDefault();
                        $.ajax({
                            url:"/show",
                            method:"POST",
                            data:{
                                year:$("#year").val()
                            },
                            headers:{"Authorization":localStorage.getItem("token")},
                            success:(data)=>{
                                console.log(data)
                                for(let user of data){
                                    $("#result").append(['',
                                    '<center><div class="row">',
                                    '<div class="col s12 m6">',
                                    '  <div class="card blue-grey darken-1">',
                                    '    <div class="card-content white-text">',
                                    ' <p><strong>Registration number: </strong>'+user.registrationNumber+'</p>',
                                    ' <p><strong>Answer 1: </strong>'+ user.answerOne   +'</p>',
                                    ' <p><strong>Answer 2: </strong>'+ user.answerTwo   +'</p>',
                                    ' <p><strong>Answer 3: </strong>'+ user.answerThree +'</p>',
                                    ' <p><strong>Answer 4: </strong>'+ user.answerFour  +'</p>',
                                    ' <p><strong>Answer 5: </strong>'+ user.answerFive  +'</p>',
                                    ' <p><strong>Answer 6: </strong>'+ user.answerSix   +'</p>',
                                    ' <p><strong>Answer 7: </strong>'+ user.answerSeven   +'</p>',
                                    ' <p><strong>Answer 8: </strong>'+ user.answerEight +'</p>',
                                    ' <p><strong>Answer 9: </strong>'+ user.answerNine  +'</p>',
                                    ' <p><strong>Answer 10: </strong>'+ user.answerTen  +'</p>',
                                    '    </div>'  ,                        
                                    '  </div>',
                                    '</div>',
                                    ' </div></center><br><br><br><br>'])
                                }
                            }
                        })
                    })
                    </script>
                `)
            }
        }
    })
})



