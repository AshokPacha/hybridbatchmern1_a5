// Validating the Update Form
function validate_update_form() {

  if (document.updForm.updPlot.value == "" ) {
    alert("Please provide Description");
    document.updForm.updPlot.focus();
    return false;
  }

  if (document.updForm.updAwards.value == "" ) {
    alert("Please provide Awards");
    document.updForm.updAwards.focus();
    return false;
  }

  if (document.updForm.updRating.value == "" ||
       isNaN(document.updForm.updRating.value) ||
       document.updForm.updRating.value > 10 ) {
    alert("Please rate from 0 to 10");
    document.updForm.updRating.focus();
    return false;
  }

  if (document.updForm.imageURL.value == "" ) {
    alert("Please upload an Image");
    return false;
  }

  return true;
}

// Validating the Create Form
function validate_create_form()
{

   if( document.addForm.Title.value == "" )
   {
      alert( "Please provide Title!" );
      document.addForm.Title.focus() ;
      return false;
   }

   if( document.addForm.Year.value == "" )
   {
      alert( "Please provide Year!" );
      document.addForm.Year.focus() ;
      return false;
   }
   if( document.addForm.Actors.value == "" )
   {
      alert( "Please provide Actors!" );
      document.addForm.Actors.focus() ;
      return false;
   }


   if( document.addForm.Director.value == "" )
   {
      alert( "Please provide Director!" );
      document.addForm.Director.focus() ;
      return false;
   }

   if( document.addForm.Released.value == "" )
   {
      alert( "Please provide Released Date" );
      document.addForm.Released.focus() ;
      return false;
   }

   if( document.addForm.Plot.value == "" )
   {
      alert( "Please provide Description" );
      document.addForm.Plot.focus() ;
      return false;
   }

   if( document.addForm.Rating.value == "" ||
   isNaN( document.addForm.Rating.value ) ||
   document.addForm.Rating.value > 10 )
   {
      alert( "Please provide Rating" );
      document.addForm.Rating.focus() ;
      return false;
   }

   if( document.addForm.Awards.value == "" )
   {
      alert( "Please provide Awards & Nominations" );
      document.addForm.Awards.focus() ;
      return false;
   }

   if( document.addForm.imageurl.value == "" )
   {
      alert( "Please upload the image!" );
      return false;
   }
   return( true );
}
