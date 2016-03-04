// var USER_DATA = {
// 	name: 'Chris',
// 	username: 'unseen1980',
// 	image: 'https://avatars1.githubusercontent.com/u/2386570?v=3&s=460'
// }


var React = require('react')
var ReactDOM = require('react-dom')
var routes = require('./config/routes');
// var HelloWorld = React.createClass({
//     render: function() {
//         return ( < div >
//             Hello React!
//             < /div>
//         )
//     }
// });
// ReactDOM.render( < HelloWorld / > , document.getElementById('app'));


// var FriendsContainer = React.createClass({
//   render: function(){
//     var name = 'Tyler McGinnis'
//     var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen']
//     return (
//       <div>
//         <h3> Name: {name} </h3>
//         <ShowList names={friends} />
//       </div>
//     )
//   }
// });

// var ShowList = React.createClass({
//   render: function(){
//     var listItems = this.props.names.map(function(friend){
//       return <li> {friend} </li>;
//     });
//     return (
//       <div>
//         <h3> Friends </h3>
//         <ul>
//           {listItems}
//         </ul>
//       </div>
//     )
//   }
// });

// ReactDOM.render( < FriendsContainer / > , document.getElementById('app'));


// var ProfilePic = React.createClass({
// 	render: function(){
// 		return <img src={this.props.imageUrl} style={{height:100, width:100}} />
// 	}
// })

// var Link = React.createClass({
// 	changeUrl: function(){
// 		window.location.replace(this.props.href)
// 	},
// 	render: function(){
// 		return (
// 			<span onClick={this.changeUrl}> 
// 				{this.props.children}
// 			</span>
// 			)
// 	}
// })

// var ProfileLink = React.createClass({
// 	render: function(){
// 		return (
// 			<div> 
// 				<Link href={'http://www.github.com/' + this.props.username}> 
// 					{this.props.username}
// 				</Link>
// 			</div>
// 			)
// 	}
// })

// var ProfileName = React.createClass({
// 	render: function(){
// 		return (
// 			<div> 
// 				{this.props.name}
// 			</div>
// 			)
// 	}
// })

// var Avatar = React.createClass({
// 	render: function(){
// 		return (
// 			<div> 
// 				<ProfilePic imageUrl={this.props.user.image}/>
// 				<ProfileLink username={this.props.user.username} />
// 				<ProfileName name={this.props.user.name} />
// 			</div>
// 			)
// 	}
// })

ReactDOM.render( routes, document.getElementById('app'));
























