angular.module("Stackoverdroid")
    .controller("questionsCtrl", function ($scope, httpRequest, $rootScope, $location, $timeout) {
        function initialize() {
            console.log('hello world in questions');
            $scope.Math = Math;
            $scope.fetchingQuestions = false;
            $scope.questions = [];
            $scope.data = null;
            $scope.moreTags = [];
            $scope.page = 1;
            $scope.pageSize = 10;
            $scope.sortType = 'creation';
            const args = argBuilderForGetQuestion();
            getQuestions(args);

            // scripts()
        }

        function getQuestions(args) {
            // read the stackoverflow api docs (https://api.stackexchange.com/docs) for more information about these attributes
            const now = new Date();
            // set for tonight at midnight
            now.setHours(11, 59, 59);
            this.page = args.page || 1;
            this.pageSize = args.pageSize || 10;
            // a week ago
            this.fromdate = args.fromdate || now.getTime() - 7 * 24 * 60 * 60;
            this.todate = args.todate || now.getTime();
            // we mostly use creation and votes, but there are other options as well, again, please read the docs
            this.sort = args.sort || 'creation';
            // the main idea of the page is about android related questions
            this.tags = ['android'];
            // add other tags if needed
            this.tags.concat(args.tags);
            // this is a default filter that constructs the body of the response as desired. read the docs for more information about the filters
            // this.filter = args.filter || '!3ykawLJfw6AVzZXKD';
            this.filter = args.filter || '!LfpZw1*uDvSdxDi6imvuty';

            this.fetchQuestions = function (queryParams) {
                $scope.fetchingQuestions = true;
                loading();
                $timeout(function () {
                    $scope.data ={
  "items": [
    {
      "tags": [
        "android",
        "gradle",
        "android-gradle-plugin",
        "bouncycastle"
      ],
      "answers": [
        {
          "comments": [
            {
              "owner": {
                "reputation": 421,
                "user_id": 3970199,
                "user_type": "registered",
                "profile_image": "https://i.stack.imgur.com/jHciX.jpg?s=128&g=1",
                "display_name": "Muhammad Zahab Ahmed Khan",
                "link": "https://stackoverflow.com/users/3970199/muhammad-zahab-ahmed-khan"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582202336,
              "post_id": 60319893,
              "comment_id": 106700946,
              "body": "Please read question carefully. @David mentioned that he already tried this solution but it didn&#39;t work."
            },
            {
              "owner": {
                "reputation": 3291,
                "user_id": 1023597,
                "user_type": "registered",
                "accept_rate": 100,
                "profile_image": "https://i.stack.imgur.com/OIGyn.png?s=128&g=1",
                "display_name": "Vishal Pawar",
                "link": "https://stackoverflow.com/users/1023597/vishal-pawar"
              },
              "reply_to_user": {
                "reputation": 421,
                "user_id": 3970199,
                "user_type": "registered",
                "profile_image": "https://i.stack.imgur.com/jHciX.jpg?s=128&g=1",
                "display_name": "Muhammad Zahab Ahmed Khan",
                "link": "https://stackoverflow.com/users/3970199/muhammad-zahab-ahmed-khan"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582202456,
              "post_id": 60319893,
              "comment_id": 106701031,
              "body": "Please read solution carefully I have written  androidTest"
            },
            {
              "owner": {
                "reputation": 421,
                "user_id": 3970199,
                "user_type": "registered",
                "profile_image": "https://i.stack.imgur.com/jHciX.jpg?s=128&g=1",
                "display_name": "Muhammad Zahab Ahmed Khan",
                "link": "https://stackoverflow.com/users/3970199/muhammad-zahab-ahmed-khan"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582202569,
              "post_id": 60319893,
              "comment_id": 106701099,
              "body": "I see.I am sorry its my bad"
            },
            {
              "owner": {
                "reputation": 2770,
                "user_id": 1690017,
                "user_type": "registered",
                "accept_rate": 38,
                "profile_image": "https://www.gravatar.com/avatar/f4227236924d10a1c31e13c0857f398c?s=128&d=identicon&r=PG",
                "display_name": "David",
                "link": "https://stackoverflow.com/users/1690017/david"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582207324,
              "post_id": 60319893,
              "comment_id": 106703904,
              "body": "This did not work!"
            }
          ],
          "owner": {
            "reputation": 3291,
            "user_id": 1023597,
            "user_type": "registered",
            "accept_rate": 100,
            "profile_image": "https://i.stack.imgur.com/OIGyn.png?s=128&g=1",
            "display_name": "Vishal Pawar",
            "link": "https://stackoverflow.com/users/1023597/vishal-pawar"
          },
          "is_accepted": false,
          "score": 0,
          "creation_date": 1582201513,
          "answer_id": 60319893,
          "question_id": 60319049,
          "body": "<p>Use this code to exclude files from test target as you are interested in excluding the files while running your tests. </p>\n\n<pre><code>sourceSets {\n\n     androidTest {\n         java {\n             exclude '**/QTeslaKeyEncodingTests.java'\n             exclude '**/QTeslaKeyEncodingTests.class'\n        }\n     }\n  }\n</code></pre>\n"
        },
        {
          "comments": [
            {
              "owner": {
                "reputation": 2770,
                "user_id": 1690017,
                "user_type": "registered",
                "accept_rate": 38,
                "profile_image": "https://www.gravatar.com/avatar/f4227236924d10a1c31e13c0857f398c?s=128&d=identicon&r=PG",
                "display_name": "David",
                "link": "https://stackoverflow.com/users/1690017/david"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582205876,
              "post_id": 60320685,
              "comment_id": 106703066,
              "body": "I don&#39;t think you understood my question."
            },
            {
              "owner": {
                "reputation": 2325,
                "user_id": 6071729,
                "user_type": "registered",
                "profile_image": "https://i.stack.imgur.com/AHQgd.jpg?s=128&g=1",
                "display_name": "Mr.AF",
                "link": "https://stackoverflow.com/users/6071729/mr-af"
              },
              "reply_to_user": {
                "reputation": 2770,
                "user_id": 1690017,
                "user_type": "registered",
                "accept_rate": 38,
                "profile_image": "https://www.gravatar.com/avatar/f4227236924d10a1c31e13c0857f398c?s=128&d=identicon&r=PG",
                "display_name": "David",
                "link": "https://stackoverflow.com/users/1690017/david"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582206110,
              "post_id": 60320685,
              "comment_id": 106703196,
              "body": "@David i understood you completely well. and i think you are going to remove unused resources from the project.right?"
            },
            {
              "owner": {
                "reputation": 2325,
                "user_id": 6071729,
                "user_type": "registered",
                "profile_image": "https://i.stack.imgur.com/AHQgd.jpg?s=128&g=1",
                "display_name": "Mr.AF",
                "link": "https://stackoverflow.com/users/6071729/mr-af"
              },
              "reply_to_user": {
                "reputation": 2770,
                "user_id": 1690017,
                "user_type": "registered",
                "accept_rate": 38,
                "profile_image": "https://www.gravatar.com/avatar/f4227236924d10a1c31e13c0857f398c?s=128&d=identicon&r=PG",
                "display_name": "David",
                "link": "https://stackoverflow.com/users/1690017/david"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582206192,
              "post_id": 60320685,
              "comment_id": 106703246,
              "body": "@David excluding is used in specific conditions that is not employed in your condition."
            },
            {
              "owner": {
                "reputation": 2770,
                "user_id": 1690017,
                "user_type": "registered",
                "accept_rate": 38,
                "profile_image": "https://www.gravatar.com/avatar/f4227236924d10a1c31e13c0857f398c?s=128&d=identicon&r=PG",
                "display_name": "David",
                "link": "https://stackoverflow.com/users/1690017/david"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582206482,
              "post_id": 60320685,
              "comment_id": 106703399,
              "body": "&quot;Unused&quot; is only part-right, why do you think shrinkResources would remove that class and not my own classes with equals properties?"
            },
            {
              "owner": {
                "reputation": 2325,
                "user_id": 6071729,
                "user_type": "registered",
                "profile_image": "https://i.stack.imgur.com/AHQgd.jpg?s=128&g=1",
                "display_name": "Mr.AF",
                "link": "https://stackoverflow.com/users/6071729/mr-af"
              },
              "reply_to_user": {
                "reputation": 2770,
                "user_id": 1690017,
                "user_type": "registered",
                "accept_rate": 38,
                "profile_image": "https://www.gravatar.com/avatar/f4227236924d10a1c31e13c0857f398c?s=128&d=identicon&r=PG",
                "display_name": "David",
                "link": "https://stackoverflow.com/users/1690017/david"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582206641,
              "post_id": 60320685,
              "comment_id": 106703487,
              "body": "@David because if there is not any ref to a class it would be considered unused because there is not any ref to that class so it can safely removed and if you would like to keep unused class just use keep annotation .right?"
            },
            {
              "owner": {
                "reputation": 2770,
                "user_id": 1690017,
                "user_type": "registered",
                "accept_rate": 38,
                "profile_image": "https://www.gravatar.com/avatar/f4227236924d10a1c31e13c0857f398c?s=128&d=identicon&r=PG",
                "display_name": "David",
                "link": "https://stackoverflow.com/users/1690017/david"
              },
              "edited": false,
              "score": 1,
              "creation_date": 1582209227,
              "post_id": 60320685,
              "comment_id": 106705050,
              "body": "Sorry, but this doesn&#39;t address the question."
            },
            {
              "owner": {
                "reputation": 2325,
                "user_id": 6071729,
                "user_type": "registered",
                "profile_image": "https://i.stack.imgur.com/AHQgd.jpg?s=128&g=1",
                "display_name": "Mr.AF",
                "link": "https://stackoverflow.com/users/6071729/mr-af"
              },
              "reply_to_user": {
                "reputation": 2770,
                "user_id": 1690017,
                "user_type": "registered",
                "accept_rate": 38,
                "profile_image": "https://www.gravatar.com/avatar/f4227236924d10a1c31e13c0857f398c?s=128&d=identicon&r=PG",
                "display_name": "David",
                "link": "https://stackoverflow.com/users/1690017/david"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582209350,
              "post_id": 60320685,
              "comment_id": 106705136,
              "body": "@David okay i will post what you want."
            }
          ],
          "owner": {
            "reputation": 2325,
            "user_id": 6071729,
            "user_type": "registered",
            "profile_image": "https://i.stack.imgur.com/AHQgd.jpg?s=128&g=1",
            "display_name": "Mr.AF",
            "link": "https://stackoverflow.com/users/6071729/mr-af"
          },
          "is_accepted": false,
          "score": 0,
          "creation_date": 1582204126,
          "answer_id": 60320685,
          "question_id": 60319049,
          "body": "<p>You don't need to do it because all unused classes will be excluded from your project in <code>release mode</code>. make sure you have enabled it before release.</p>\n\n<pre><code>buildTypes {\n        release {\n            shrinkResources true\n        }\n}\n</code></pre>\n\n<p>You can enable it in <code>debug mode</code> also but it's not a good idea because it increases compilation time.</p>\n"
        }
      ],
      "owner": {
        "reputation": 2770,
        "user_id": 1690017,
        "user_type": "registered",
        "accept_rate": 38,
        "profile_image": "https://www.gravatar.com/avatar/f4227236924d10a1c31e13c0857f398c?s=128&d=identicon&r=PG",
        "display_name": "David",
        "link": "https://stackoverflow.com/users/1690017/david"
      },
      "is_answered": false,
      "view_count": 60,
      "answer_count": 2,
      "score": 5,
      "last_activity_date": 1582205494,
      "creation_date": 1582198534,
      "last_edit_date": 1582205494,
      "question_id": 60319049,
      "link": "https://stackoverflow.com/questions/60319049/is-it-possible-to-remove-a-class-from-an-imported-gradle-library",
      "title": "Is it possible to remove a class from an imported gradle library?",
      "body": "<p>I'm searching and trying already one day long to remove a class from an imported library over gradle without really getting it to work, should this be possible with Android+gradle? How to do this?</p>\n\n<p>For example if I include a library like so:</p>\n\n<pre><code>implementation 'org.bouncycastle:bcpkix-jdk15on:1.64'\n</code></pre>\n\n<p>How to remove a class by name from it? The latest thing I tried was setting in build.gradle:</p>\n\n<pre><code>android {\n  sourceSets.main.java.filter.exclude '**/QTeslaKeyEncodingTests.*'\n}\n</code></pre>\n\n<p>Following also doesn't work:</p>\n\n<pre><code>jar {\n    sourceSets {\n        main {\n            java {\n                exclude '**/QTeslaKeyEncodingTests.java'\n                exclude '**/QTeslaKeyEncodingTests.class'\n            }\n        }\n    }\n}\n</code></pre>\n\n<p>This also doesn't:</p>\n\n<pre><code>android{\n  packagingOptions {        \n    exclude 'org.bouncycastle/pqc/crypto/qtesla/QTeslaKeyEncodingTests.class'\n  }\n}\n</code></pre>\n\n<p>Context: why do I need this currently: when you execute \"gradlew testDebug\" all tests in the project run, including those present in the imported libs. I also don't know if this is a bug from bouncyCastle that they included those tests in the library but it's a problem because many tests fail.</p>\n"
    },
    {
      "tags": [
        "android",
        "kotlin"
      ],
      "answers": [
        {
          "comments": [
            {
              "owner": {
                "reputation": 140,
                "user_id": 11377112,
                "user_type": "registered",
                "profile_image": "https://graph.facebook.com/158814934598574/picture?type=large",
                "display_name": "Animesh Sahu",
                "link": "https://stackoverflow.com/users/11377112/animesh-sahu"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1581909663,
              "post_id": 60255458,
              "comment_id": 106581737,
              "body": "@William Hu btw do you use coroutine in your current project?"
            },
            {
              "owner": {
                "reputation": 10414,
                "user_id": 291240,
                "user_type": "registered",
                "accept_rate": 70,
                "profile_image": "https://i.stack.imgur.com/J9327.jpg?s=128&g=1",
                "display_name": "William Hu",
                "link": "https://stackoverflow.com/users/291240/william-hu"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582268594,
              "post_id": 60255458,
              "comment_id": 106725746,
              "body": "Hey thanks, I got back after I got solved it. Basically it should be the same idea as yours. I add my own answer too along with the cancel requests functionality. Thanks! let me vote up your answer."
            }
          ],
          "owner": {
            "reputation": 140,
            "user_id": 11377112,
            "user_type": "registered",
            "profile_image": "https://graph.facebook.com/158814934598574/picture?type=large",
            "display_name": "Animesh Sahu",
            "link": "https://stackoverflow.com/users/11377112/animesh-sahu"
          },
          "is_accepted": false,
          "score": 1,
          "creation_date": 1581909090,
          "answer_id": 60255458,
          "question_id": 60254973,
          "body": "<p>You could use coroutine for this purpose,</p>\n\n<p>As an example:</p>\n\n<pre><code>// suspend fun main() = withContext(Dispatchers.Default) { // for production\nfun main() = runBlocking { // for testing (single threaded)\n    var startIndex = 0\n    val batchSize = 10\n    val totoalCount = 50\n    var requestTimes = totoalCount / batchSize\n    for (index in 1..requestTimes) {\n        val result = request(startIndex)\n        // do result.onSuccess{} here\n        startIndex += batchSize\n    }\n}\n\nsuspend fun request(startIndex: Int) = suspendCoroutine&lt;Result&lt;JsonObject&gt;&gt; {cont -&gt;\n    client.fetchItems(startIndex) { cont.resume (it) }\n}\n</code></pre>\n\n<p><strong>NOTE: Since i don't know about what is type of fetchItems{it} in request function, i used <code>suspendCoroutine&lt;Result&lt;JsonObject&gt;&gt;</code> change it to what your fetchItems{it} return</strong></p>\n\n<p>The thread will be suspended till the coroutine is completed and another coroutine could easily occupy that thread till the request has the continuation resumed. So its not like blocking the thread or anything (stupid) :).</p>\n\n<p><strong>EDIT:</strong> see <a href=\"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines.experimental/suspend-coroutine.html\" rel=\"nofollow noreferrer\">https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines.experimental/suspend-coroutine.html</a> and <a href=\"https://discuss.kotlinlang.org/t/where-is-suspendcoroutine-supposed-to-be-used/11190/2\" rel=\"nofollow noreferrer\">https://discuss.kotlinlang.org/t/where-is-suspendcoroutine-supposed-to-be-used/11190/2</a></p>\n"
        },
        {
          "comments": [
            {
              "owner": {
                "reputation": 140,
                "user_id": 11377112,
                "user_type": "registered",
                "profile_image": "https://graph.facebook.com/158814934598574/picture?type=large",
                "display_name": "Animesh Sahu",
                "link": "https://stackoverflow.com/users/11377112/animesh-sahu"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582286511,
              "post_id": 60333589,
              "comment_id": 106734326,
              "body": "Nice to see your problem has solved!"
            }
          ],
          "owner": {
            "reputation": 10414,
            "user_id": 291240,
            "user_type": "registered",
            "accept_rate": 70,
            "profile_image": "https://i.stack.imgur.com/J9327.jpg?s=128&g=1",
            "display_name": "William Hu",
            "link": "https://stackoverflow.com/users/291240/william-hu"
          },
          "is_accepted": false,
          "score": 1,
          "creation_date": 1582268384,
          "answer_id": 60333589,
          "question_id": 60254973,
          "body": "<p>I got the solution by <strong>coroutines</strong>.</p>\n\n<p>First, make the <code>fetchItems</code> a suspend function:</p>\n\n<pre><code>suspend fun fetchItems(paramter: Parameter) {}\n</code></pre>\n\n<p>Then </p>\n\n<pre><code>var startIndex = 0\nvar batchSize = 10\nvar totoalCount = 50 \nvar requestTimes = totoalCount/batchSize \n\n\nlaunch {\n            (1..requestTimes).asFlow()\n                .map {\n                    val p = parameter.copy(startIndex = it * 10)\n                    fetchItems(p, completion)\n                }.collect()\n        }\n</code></pre>\n\n<p>Simple enough.</p>\n\n<p>Or you can use another version of launch:</p>\n\n<pre><code>         launch {\n            repeat(parameter.requestTimes) {\n                val p = parameter.copy(startIndex = it * batchSize)\n                requestContact(p, completion)\n            }\n        }\n</code></pre>\n\n<p><strong>PS</strong>: 1. For the parameter try to use <code>val</code> properties to make sure it's thread-safe.</p>\n\n<ol start=\"2\">\n<li>Sometimes you may need to cancel the batch requests.</li>\n</ol>\n\n<p>Here is the solution:</p>\n\n<pre><code>class Downloader: CoroutineScope by CoroutineScope(Dispatchers.Default) {\n\n    fun destroy() {\n        cancel()\n    }\n\n    fun startDownloder() {\n        // add above launch in here.\n    }\n}\n</code></pre>\n\n<p>Then you can:</p>\n\n<pre><code>runBlocking  {\n            val downloader = Downloader()\n            downloader.startDownloder()\n            delay(5000L) // this can be used just for debugging to see requests are really canceled\n           // Cancel the requests\n            downloader.destroy()\n        }\n</code></pre>\n"
        }
      ],
      "owner": {
        "reputation": 10414,
        "user_id": 291240,
        "user_type": "registered",
        "accept_rate": 70,
        "profile_image": "https://i.stack.imgur.com/J9327.jpg?s=128&g=1",
        "display_name": "William Hu",
        "link": "https://stackoverflow.com/users/291240/william-hu"
      },
      "is_answered": true,
      "view_count": 74,
      "answer_count": 2,
      "score": 4,
      "last_activity_date": 1582268795,
      "creation_date": 1581904358,
      "last_edit_date": 1582017137,
      "question_id": 60254973,
      "link": "https://stackoverflow.com/questions/60254973/kotlin-how-to-make-multiple-requests-in-a-queue",
      "title": "Kotlin how to make multiple requests in a queue",
      "body": "<p>I have multiple requests, each request return 10 items. Something like this:</p>\n\n<pre><code>        var startIndex = 0\n        var batchSize = 10\n        var totoalCount = 50 \n        var requestTimes = totoalCount/batchSize \n        for (index in 1..reqeustTimes) {\n           client.request(url, \"POST\", startIndex) {\n               completion(result.map {\n                  //store in an array and append the returned items\n               })\n            startIndex += batchSize\n        }\n</code></pre>\n\n<p>But I want to control the order, like put the request in a queue, one finished the start the next one.</p>\n\n<p>How should I do that?</p>\n\n<p>Thanks!</p>\n\n<p><strong>EDIT</strong></p>\n\n<pre><code>completion: ((Result&lt;JsonObject&gt;) -&gt; Unit)? \n</code></pre>\n\n<p>is an lambda.</p>\n\n<p><strong>EDIT:</strong> </p>\n\n<p>I can make the request one by one, but the problem right now is the request isn't in order.</p>\n\n<pre><code>launch {   \n          (1..parameter.totalSize/parameter.batchSize).asFlow()\n                    .map { _ -&gt; fetchItem(parameter)}.collect()\n}\n</code></pre>\n"
    },
    {
      "tags": [
        "android",
        "android-permissions"
      ],
      "answers": [
        {
          "owner": {
            "reputation": 2499,
            "user_id": 9180439,
            "user_type": "registered",
            "accept_rate": 80,
            "profile_image": "https://i.stack.imgur.com/WF0UI.jpg?s=128&g=1",
            "display_name": "Ali",
            "link": "https://stackoverflow.com/users/9180439/ali"
          },
          "is_accepted": true,
          "score": 4,
          "creation_date": 1582183017,
          "answer_id": 60314676,
          "question_id": 60314675,
          "body": "<p>First of all, Write permission in <code>Manifest</code> file(I take some bagic permissions):</p>\n\n<pre><code>&lt;uses-permission android:name=\"android.permission.INTERNET\" /&gt;\n&lt;uses-permission android:name=\"android.permission.CAMERA\" /&gt;\n&lt;uses-permission android:name=\"android.permission.READ_EXTERNAL_STORAGE\" /&gt;\n&lt;uses-permission android:name=\"android.permission.WRITE_EXTERNAL_STORAGE\" /&gt;\n</code></pre>\n\n<p>Now I make two methods <strong><code>checkPermission()</code></strong> AND <strong><code>requestPermission()</code></strong> also <code>@Override</code> one method name is <strong><code>onRequestPermissionsResult()</code></strong> this is take care of result.</p>\n\n<p>Now I'll show you how it looks like:</p>\n\n<pre><code>private boolean checkPermission() {\n        int internetPermission = ContextCompat.checkSelfPermission(getApplicationContext(), INTERNET);\n        int cameraPermission = ContextCompat.checkSelfPermission(getApplicationContext(), CAMERA);\n        int readStoragePermission = ContextCompat.checkSelfPermission(getApplicationContext(), READ_EXTERNAL_STORAGE);\n        int writeStoragePermission = ContextCompat.checkSelfPermission(getApplicationContext(), WRITE_EXTERNAL_STORAGE);\n\n        return internetPermission == PackageManager.PERMISSION_GRANTED &amp;&amp;\n                cameraPermission == PackageManager.PERMISSION_GRANTED &amp;&amp;\n                readStoragePermission == PackageManager.PERMISSION_GRANTED &amp;&amp;\n                writeStoragePermission == PackageManager.PERMISSION_GRANTED;\n    }\n</code></pre>\n\n<p>You see in above code there is define INTERNET, CAMERA etc.. This is an import by clicking <kbd>Alt</kbd> + <kbd>Enter</kbd> And it is look like see below code:</p>\n\n<pre><code>import static android.Manifest.permission.CAMERA;\nimport static android.Manifest.permission.INTERNET;\nimport static android.Manifest.permission.READ_EXTERNAL_STORAGE;\nimport static android.Manifest.permission.WRITE_EXTERNAL_STORAGE;\n</code></pre>\n\n<p>Now Please see below code of <strong><code>requestPermission()</code></strong> Method :</p>\n\n<pre><code>private void requestPermission() {\n        ActivityCompat.requestPermissions(MainActivity.this, new String[]{INTERNET, CAMERA, READ_EXTERNAL_STORAGE, WRITE_EXTERNAL_STORAGE}, 1);\n    }\n</code></pre>\n\n<p>Now the Last method is <strong><code>onRequestPermissionsResult()</code></strong>. In this method you can see either permission is GRANTED or DENY:</p>\n\n<pre><code>@Override\n    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {\n\n        switch (requestCode) {\n\n            case 1:\n                if (grantResults.length &gt; 0) {\n                    boolean internet = grantResults[0] == PackageManager.PERMISSION_GRANTED;\n                    boolean camera = grantResults[1] == PackageManager.PERMISSION_GRANTED;\n                    boolean readStorage = grantResults[2] == PackageManager.PERMISSION_GRANTED;\n                    boolean writeStorage = grantResults[3] == PackageManager.PERMISSION_GRANTED;\n\n                    if (internet &amp;&amp; camera &amp;&amp; readStorage &amp;&amp; writeStorage) {\n                        init();\n                       // Permission GRANTED (Here write your code what you want).\n                    } else {\n                        // Permission DENY (If user click on DENY then finish the activity);\n                        finish();\n                    }\n                }\n        }\n    }\n</code></pre>\n\n<p>Great you are done with checkPermission &amp; requestPermission.</p>\n\n<p><strong>NOTE:</strong></p>\n\n<p>This above code is working for <strong><code>Activity</code></strong>. There is a minor change in the fragment. </p>\n\n<p><strong>If I use this code in fragment then what should I change:</strong></p>\n\n<blockquote>\n  <p>You want to just change in <strong><code>requestPermission()</code></strong> Method: </p>\n</blockquote>\n\n<pre><code>private void requestPermission() {\n            requestPermissions(new String[]{INTERNET, CAMERA, READ_EXTERNAL_STORAGE, WRITE_EXTERNAL_STORAGE}, 1);\n        }\n</code></pre>\n"
        },
        {
          "comments": [
            {
              "owner": {
                "reputation": 2499,
                "user_id": 9180439,
                "user_type": "registered",
                "accept_rate": 80,
                "profile_image": "https://i.stack.imgur.com/WF0UI.jpg?s=128&g=1",
                "display_name": "Ali",
                "link": "https://stackoverflow.com/users/9180439/ali"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582184174,
              "post_id": 60314935,
              "comment_id": 106691557,
              "body": "I already share my answer buddy. Without using any third party"
            }
          ],
          "owner": {
            "reputation": 163,
            "user_id": 11951874,
            "user_type": "registered",
            "profile_image": "https://www.gravatar.com/avatar/98cc25669b776e913b9ab1f5e659a261?s=128&d=identicon&r=PG&f=1",
            "display_name": "Raju Tukadiya",
            "link": "https://stackoverflow.com/users/11951874/raju-tukadiya"
          },
          "is_accepted": false,
          "score": 0,
          "creation_date": 1582184123,
          "answer_id": 60314935,
          "question_id": 60314675,
          "body": "<p>please try to  dexter  dependency</p>\n\n<p>step:1 </p>\n\n<pre><code> dependencies{\n   implementation 'com.karumi:dexter:6.0.2'\n }\n</code></pre>\n\n<p>step: 2 </p>\n\n<pre><code>     Dexter.withActivity(this)\n    .withPermission(Manifest.permission.CAMERA)\n    .withListener(new PermissionListener() {\n    @Override public void onPermissionGranted(PermissionGrantedResponse response) {/* \n    @Override public void onPermissionDenied(PermissionDeniedResponse response) {/* \n    @Override public void onPermissionRationaleShouldBeShown(PermissionRequest \n    permission, PermissionToken token) {/* ... */}\n    }).check();\n</code></pre>\n\n<p>link :\n       <a href=\"https://github.com/Karumi/Dexter\" rel=\"nofollow noreferrer\">https://github.com/Karumi/Dexter</a></p>\n"
        }
      ],
      "owner": {
        "reputation": 2499,
        "user_id": 9180439,
        "user_type": "registered",
        "accept_rate": 80,
        "profile_image": "https://i.stack.imgur.com/WF0UI.jpg?s=128&g=1",
        "display_name": "Ali",
        "link": "https://stackoverflow.com/users/9180439/ali"
      },
      "is_answered": true,
      "view_count": 76,
      "accepted_answer_id": 60314676,
      "answer_count": 2,
      "score": 3,
      "last_activity_date": 1582192182,
      "creation_date": 1582183017,
      "last_edit_date": 1582192182,
      "question_id": 60314675,
      "link": "https://stackoverflow.com/questions/60314675/how-to-check-permission-and-request-permission-in-easy-coding-easy-to-underst",
      "title": "How to check permission and request permission in (Easy coding &amp; easy to understand)",
      "body": "<p>I search for Run-Time-Permission in android and I find lots of links but I see there is complex code so today.</p>\n\n<p><strong>Note:</strong> I share my simple code here so it's helpful for a new developer or Frasher. Also, I didn't use any third party library here.</p>\n"
    },
    {
      "tags": [
        "java",
        "android",
        "datetime",
        "kotlin",
        "utc"
      ],
      "answers": [
        {
          "comments": [
            {
              "owner": {
                "reputation": 3278,
                "user_id": 5278194,
                "user_type": "registered",
                "profile_image": "https://graph.facebook.com/1081657681851881/picture?type=large",
                "display_name": "Parad0X",
                "link": "https://stackoverflow.com/users/5278194/parad0x"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582110908,
              "post_id": 60282531,
              "comment_id": 106661883,
              "body": "no because i have time(long) in timestamp not in string, i need format timestamp to string with specific timezone."
            }
          ],
          "owner": {
            "reputation": 1227,
            "user_id": 718849,
            "user_type": "registered",
            "accept_rate": 100,
            "profile_image": "https://www.gravatar.com/avatar/e60330cbf169096be1c83cfdc7219ec9?s=128&d=identicon&r=PG",
            "display_name": "Jonck van der Kogel",
            "link": "https://stackoverflow.com/users/718849/jonck-van-der-kogel"
          },
          "is_accepted": false,
          "score": 2,
          "creation_date": 1582034131,
          "answer_id": 60282531,
          "question_id": 60282255,
          "body": "<p>Is this what you're looking for?</p>\n\n<pre><code>DateTimeFormatter formatter = DateTimeFormatter.ofPattern(\"d.M.yyyy  HH:mm\");\n\nLocalDateTime localDateTime = LocalDateTime.parse(dateTimeString, formatter);\n\nZonedDateTime zonedDateTime = ZonedDateTime.of(localDateTime, ZoneId.of(\"UTC+1\"));\n</code></pre>\n"
        },
        {
          "comments": [
            {
              "owner": {
                "reputation": 3278,
                "user_id": 5278194,
                "user_type": "registered",
                "profile_image": "https://graph.facebook.com/1081657681851881/picture?type=large",
                "display_name": "Parad0X",
                "link": "https://stackoverflow.com/users/5278194/parad0x"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582118805,
              "post_id": 60284588,
              "comment_id": 106666367,
              "body": "nice answer but only for API 26+ how i can solve problem for API 21-25?  Thanks"
            },
            {
              "owner": {
                "reputation": 6493,
                "user_id": 1712135,
                "user_type": "registered",
                "profile_image": "https://i.stack.imgur.com/cErYR.png?s=128&g=1",
                "display_name": "deHaar",
                "link": "https://stackoverflow.com/users/1712135/dehaar"
              },
              "reply_to_user": {
                "reputation": 3278,
                "user_id": 5278194,
                "user_type": "registered",
                "profile_image": "https://graph.facebook.com/1081657681851881/picture?type=large",
                "display_name": "Parad0X",
                "link": "https://stackoverflow.com/users/5278194/parad0x"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582119460,
              "post_id": 60284588,
              "comment_id": 106666752,
              "body": "@Parad0X thanks, I have described it in the answer, last two paragraphs... Use the backport library."
            },
            {
              "owner": {
                "reputation": 3278,
                "user_id": 5278194,
                "user_type": "registered",
                "profile_image": "https://graph.facebook.com/1081657681851881/picture?type=large",
                "display_name": "Parad0X",
                "link": "https://stackoverflow.com/users/5278194/parad0x"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582119897,
              "post_id": 60284588,
              "comment_id": 106667034,
              "body": "oh sorry, I tried it, but i use wrong import for Instant. thanks, the best answer!"
            }
          ],
          "owner": {
            "reputation": 6493,
            "user_id": 1712135,
            "user_type": "registered",
            "profile_image": "https://i.stack.imgur.com/cErYR.png?s=128&g=1",
            "display_name": "deHaar",
            "link": "https://stackoverflow.com/users/1712135/dehaar"
          },
          "is_accepted": true,
          "score": 2,
          "creation_date": 1582040514,
          "answer_id": 60284588,
          "question_id": 60282255,
          "body": "<p>Here is a <code>java.time</code> example that uses a <code>ZonedDateTime</code> created from a moment in time, that is an <code>Instant</code> in the mentioned package:</p>\n\n<pre><code>public static void main(String[] args) {\n    // get a representation of a moment in time (not a specific date or time)\n    Instant now = Instant.now();\n    // then use that in order to represent it in a specific zone using an offset of -1 hour\n    ZonedDateTime utcZdt = ZonedDateTime.ofInstant(now, ZoneOffset.ofHours(-1));\n    // and use it again in order to have another one defined by a specific time zone\n    ZonedDateTime laZdt = ZonedDateTime.ofInstant(now, ZoneId.of(\"America/Los_Angeles\"));\n\n    // and print the representation as String\n    System.out.println(utcZdt.format(DateTimeFormatter.ISO_ZONED_DATE_TIME));\n    System.out.println(laZdt.format(DateTimeFormatter.ISO_ZONED_DATE_TIME));\n}\n</code></pre>\n\n<p>The output is</p>\n\n<pre class=\"lang-none prettyprint-override\"><code>2020-02-18T14:31:21.714-01:00\n2020-02-18T07:31:21.714-08:00[America/Los_Angeles]\n</code></pre>\n\n<p>You can alternatively use an <code>OffsetDateTime</code> of the same package.</p>\n\n<p><strong>The key is to use an <code>Instant</code>, derived from epoch millis. Those millisecond values are moments in time, too, independent from zones or offsets.</strong></p>\n\n<p>You are coding an Android app, so you might have to use the <a href=\"https://github.com/JakeWharton/ThreeTenABP\" rel=\"nofollow noreferrer\">ThreeTenABP</a>, a backport of nearly the entire <code>java.time</code> functionality for API levels below Android 26.</p>\n\n<p>I think that, nowadays, using <code>java.time</code> or a backport of it is the least troublesome and most straight-forward way to solve tasks like yours.</p>\n"
        }
      ],
      "owner": {
        "reputation": 3278,
        "user_id": 5278194,
        "user_type": "registered",
        "profile_image": "https://graph.facebook.com/1081657681851881/picture?type=large",
        "display_name": "Parad0X",
        "link": "https://stackoverflow.com/users/5278194/parad0x"
      },
      "is_answered": true,
      "view_count": 55,
      "accepted_answer_id": 60284588,
      "answer_count": 2,
      "score": 3,
      "last_activity_date": 1582040514,
      "creation_date": 1582033346,
      "question_id": 60282255,
      "link": "https://stackoverflow.com/questions/60282255/timeformat-always-from-specific-timezone",
      "title": "TimeFormat always from specific timezone",
      "body": "<p>I have problem with date format I create App where I cant format time from current locale but always from specific locale UTC+1 or specific state, but I dont know how. </p>\n\n<pre><code>SimpleDateFormat(\"d.M.yyyy  HH:mm\", Locale.getDefault()).format(Date(date))\n</code></pre>\n\n<p>i need set locale or timezone like constant which not depend on physical position or phone settings. </p>\n\n<p>I have data always in UTC-0 but I need transform it to UTC+1 (or other) and show to users. </p>\n\n<p>Thanks for any help</p>\n\n<p>For time sync I use TrueTime library</p>\n"
    },
    {
      "tags": [
        "android",
        "gradle",
        "proguard",
        "sentry",
        "android-r8"
      ],
      "answers": [
        {
          "comments": [
            {
              "owner": {
                "reputation": 4046,
                "user_id": 1565635,
                "user_type": "registered",
                "accept_rate": 74,
                "profile_image": "https://www.gravatar.com/avatar/47afd04b281fd1fb5ff38a9cc5378562?s=128&d=identicon&r=PG",
                "display_name": "Tobias Reich",
                "link": "https://stackoverflow.com/users/1565635/tobias-reich"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582038199,
              "post_id": 60283077,
              "comment_id": 106633801,
              "body": "As stated in my question, when doing this, I get the error &quot;Cannot invoke method dependsOn() on null object&quot; so I guess the gradle task itself is broken somehow, too."
            },
            {
              "owner": {
                "reputation": 33788,
                "user_id": 549372,
                "user_type": "registered",
                "accept_rate": 100,
                "profile_image": "https://www.gravatar.com/avatar/cc12ae5f4b59645f0fbfde098c306756?s=128&d=identicon&r=PG&f=1",
                "display_name": "Martin Zeitler",
                "link": "https://stackoverflow.com/users/549372/martin-zeitler"
              },
              "reply_to_user": {
                "reputation": 4046,
                "user_id": 1565635,
                "user_type": "registered",
                "accept_rate": 74,
                "profile_image": "https://www.gravatar.com/avatar/47afd04b281fd1fb5ff38a9cc5378562?s=128&d=identicon&r=PG",
                "display_name": "Tobias Reich",
                "link": "https://stackoverflow.com/users/1565635/tobias-reich"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582039263,
              "post_id": 60283077,
              "comment_id": 106634467,
              "body": "<code>def dexTask = project.tasks.findByName(&quot;transformClassesWithDexFor${varian&zwnj;&#8203;tName}&quot;)</code> is <code>null</code> ...this mean the name of the task does not match. I only have some task called <code>transformClassesWithDexBuilderForDebug</code>, which adds in the <code>Builder</code>."
            },
            {
              "owner": {
                "reputation": 4046,
                "user_id": 1565635,
                "user_type": "registered",
                "accept_rate": 74,
                "profile_image": "https://www.gravatar.com/avatar/47afd04b281fd1fb5ff38a9cc5378562?s=128&d=identicon&r=PG",
                "display_name": "Tobias Reich",
                "link": "https://stackoverflow.com/users/1565635/tobias-reich"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582039665,
              "post_id": 60283077,
              "comment_id": 106634683,
              "body": "Yea thanks. As seen in my screenshot, I don&#39;t seem to have that task for Release. But how can this be? Where are these tasks generated? Debug exists but Release not."
            },
            {
              "owner": {
                "reputation": 33788,
                "user_id": 549372,
                "user_type": "registered",
                "accept_rate": 100,
                "profile_image": "https://www.gravatar.com/avatar/cc12ae5f4b59645f0fbfde098c306756?s=128&d=identicon&r=PG&f=1",
                "display_name": "Martin Zeitler",
                "link": "https://stackoverflow.com/users/549372/martin-zeitler"
              },
              "reply_to_user": {
                "reputation": 4046,
                "user_id": 1565635,
                "user_type": "registered",
                "accept_rate": 74,
                "profile_image": "https://www.gravatar.com/avatar/47afd04b281fd1fb5ff38a9cc5378562?s=128&d=identicon&r=PG",
                "display_name": "Tobias Reich",
                "link": "https://stackoverflow.com/users/1565635/tobias-reich"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582040029,
              "post_id": 60283077,
              "comment_id": 106634909,
              "body": "<code>transformClassesAndResourcesWithR8ForPlayStoreStagingRelease</code> exists in the screenshot... obviously one needs the obfuscation task, so that the mapping file would even exist. Also make sure that a mapping file is even saved at the expected location."
            },
            {
              "owner": {
                "reputation": 4046,
                "user_id": 1565635,
                "user_type": "registered",
                "accept_rate": 74,
                "profile_image": "https://www.gravatar.com/avatar/47afd04b281fd1fb5ff38a9cc5378562?s=128&d=identicon&r=PG",
                "display_name": "Tobias Reich",
                "link": "https://stackoverflow.com/users/1565635/tobias-reich"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582041159,
              "post_id": 60283077,
              "comment_id": 106635638,
              "body": "Okay, sorry to bother you again. I added a list to the question of the tasks that don&#39;t exist. Somehow some Release variants dont have the Dex-Task. How can this happen?"
            },
            {
              "owner": {
                "reputation": 33788,
                "user_id": 549372,
                "user_type": "registered",
                "accept_rate": 100,
                "profile_image": "https://www.gravatar.com/avatar/cc12ae5f4b59645f0fbfde098c306756?s=128&d=identicon&r=PG&f=1",
                "display_name": "Martin Zeitler",
                "link": "https://stackoverflow.com/users/549372/martin-zeitler"
              },
              "reply_to_user": {
                "reputation": 4046,
                "user_id": 1565635,
                "user_type": "registered",
                "accept_rate": 74,
                "profile_image": "https://www.gravatar.com/avatar/47afd04b281fd1fb5ff38a9cc5378562?s=128&d=identicon&r=PG",
                "display_name": "Tobias Reich",
                "link": "https://stackoverflow.com/users/1565635/tobias-reich"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582041634,
              "post_id": 60283077,
              "comment_id": 106635975,
              "body": "The D8 task should exist in every case, because it won&#39;t build without it... except there might be no code available in the module."
            },
            {
              "owner": {
                "reputation": 4046,
                "user_id": 1565635,
                "user_type": "registered",
                "accept_rate": 74,
                "profile_image": "https://www.gravatar.com/avatar/47afd04b281fd1fb5ff38a9cc5378562?s=128&d=identicon&r=PG",
                "display_name": "Tobias Reich",
                "link": "https://stackoverflow.com/users/1565635/tobias-reich"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582101997,
              "post_id": 60283077,
              "comment_id": 106656829,
              "body": "Okay, I guess my questions are drifting here and it becomes a new question. So I will accept this as the solution to my original Gradle problem. Thanks!"
            }
          ],
          "owner": {
            "reputation": 33788,
            "user_id": 549372,
            "user_type": "registered",
            "accept_rate": 100,
            "profile_image": "https://www.gravatar.com/avatar/cc12ae5f4b59645f0fbfde098c306756?s=128&d=identicon&r=PG&f=1",
            "display_name": "Martin Zeitler",
            "link": "https://stackoverflow.com/users/549372/martin-zeitler"
          },
          "is_accepted": true,
          "score": 1,
          "creation_date": 1582035865,
          "answer_id": 60283077,
          "question_id": 60282834,
          "body": "<p><code>java.util.ArrayList.multiply()</code> hints for that <code>*</code> in front of the <code>[  ]</code> list, which looks strange to me. Try removing the <code>*[ ]</code>, only keeping <code>List&lt;String&gt;</code> (there's no <code>ArrayList</code> expected, to begin with):</p>\n\n<pre><code>commandLine \"sentry-cli\", \"upload-proguard\", \"--write-properties\", \"${project.rootDir.toPath()}/app/build/intermediates/assets/${variant.dirName}/sentry-debug-meta.properties\", variant.getMappingFile(), \"--no-upload\"\n</code></pre>\n\n<p>You'd have to look up how your tasks are actually being called, but it should be something alike:</p>\n\n<pre><code>def r8Task = project.tasks.findByName(\"transformClassesAndResourcesWithR8For${variantName}\")\ndef d8Task = project.tasks.findByName(\"transformClassesWithDexBuilderFor${variantName}\")\n</code></pre>\n\n<p>With a <code>null</code> check, because not every variant might have <code>minifyEnabled true</code> set:</p>\n\n<pre><code>if(r8Task != null) {\n    d8Task.dependsOn task\n    task.dependsOn r8Task\n}\n</code></pre>\n\n<p>Maybe even a previous <code>null</code> check is required, because <code>variant.getMappingFile()</code> needs R8.</p>\n\n<p>And that some flavors have no D8 task might be based upon the absence of code (nothing to do).</p>\n"
        },
        {
          "comments": [
            {
              "owner": {
                "reputation": 4046,
                "user_id": 1565635,
                "user_type": "registered",
                "accept_rate": 74,
                "profile_image": "https://www.gravatar.com/avatar/47afd04b281fd1fb5ff38a9cc5378562?s=128&d=identicon&r=PG",
                "display_name": "Tobias Reich",
                "link": "https://stackoverflow.com/users/1565635/tobias-reich"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582101564,
              "post_id": 60284920,
              "comment_id": 106656621,
              "body": "Actually, I did that but it doesn&#39;t seem to work. When using this, there is no mapping with my obfuscated code and I assume it is because this is not &quot;executed&quot; properly"
            },
            {
              "owner": {
                "reputation": 21,
                "user_id": 9739939,
                "user_type": "registered",
                "profile_image": "https://lh4.googleusercontent.com/-d9DWF_V4F50/AAAAAAAAAAI/AAAAAAAAAAs/YxwJA1117Ws/photo.jpg?sz=128",
                "display_name": "Manoel Neto",
                "link": "https://stackoverflow.com/users/9739939/manoel-neto"
              },
              "reply_to_user": {
                "reputation": 4046,
                "user_id": 1565635,
                "user_type": "registered",
                "accept_rate": 74,
                "profile_image": "https://www.gravatar.com/avatar/47afd04b281fd1fb5ff38a9cc5378562?s=128&d=identicon&r=PG",
                "display_name": "Tobias Reich",
                "link": "https://stackoverflow.com/users/1565635/tobias-reich"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582102183,
              "post_id": 60284920,
              "comment_id": 106656932,
              "body": "do you mind raising an issue <a href=\"https://github.com/getsentry/sentry-android-gradle-plugin\" rel=\"nofollow noreferrer\">github.com/getsentry/sentry-android-gradle-plugin</a>? Gradle + AGP version would be helpful, I&#39;ve tested it a few days ago using AGP 3.x to 3.6.x version and Gradle till version 5.6.x and it worked just fine, maybe a misconfiguration? glad to help, thanks."
            }
          ],
          "owner": {
            "reputation": 21,
            "user_id": 9739939,
            "user_type": "registered",
            "profile_image": "https://lh4.googleusercontent.com/-d9DWF_V4F50/AAAAAAAAAAI/AAAAAAAAAAs/YxwJA1117Ws/photo.jpg?sz=128",
            "display_name": "Manoel Neto",
            "link": "https://stackoverflow.com/users/9739939/manoel-neto"
          },
          "is_accepted": false,
          "score": 2,
          "creation_date": 1582041585,
          "answer_id": 60284920,
          "question_id": 60282834,
          "body": "<p>I'd recommend using the Sentry Gradle integration (Gradle plugin) which is described here <a href=\"https://docs.sentry.io/platforms/android/#gradle-integration\" rel=\"nofollow noreferrer\">https://docs.sentry.io/platforms/android/#gradle-integration</a></p>\n\n<p>The official Android Gradle plugin changed its task names over versions, Gradle version also affects those code snippets.</p>\n\n<p>Google also replaced Proguard with R8 and it also affected those code snippets.</p>\n\n<p>Is there a reason why not using the Sentry Gradle integration? if so, We'll be looking into updating them.</p>\n\n<p>Thanks.</p>\n"
        }
      ],
      "owner": {
        "reputation": 4046,
        "user_id": 1565635,
        "user_type": "registered",
        "accept_rate": 74,
        "profile_image": "https://www.gravatar.com/avatar/47afd04b281fd1fb5ff38a9cc5378562?s=128&d=identicon&r=PG",
        "display_name": "Tobias Reich",
        "link": "https://stackoverflow.com/users/1565635/tobias-reich"
      },
      "is_answered": true,
      "view_count": 60,
      "accepted_answer_id": 60283077,
      "answer_count": 2,
      "score": 3,
      "last_activity_date": 1582041828,
      "creation_date": 1582035096,
      "last_edit_date": 1582041092,
      "question_id": 60282834,
      "link": "https://stackoverflow.com/questions/60282834/gradle-task-for-sentry-not-compiling",
      "title": "Gradle task for Sentry not compiling",
      "body": "<p>I have to add the Analytics tool <strong>Sentry</strong> to our Android project. In order to make it work, one needs to create mappings for the obfuscated code (from Proguard/R8) and upload it later to Sentry.</p>\n\n<p>On the website <a href=\"https://docs.sentry.io/platforms/android/\" rel=\"nofollow noreferrer\">https://docs.sentry.io/platforms/android/</a> it is even described how to do that.\nThere it is written that one needs to create a gradle task looking like this:</p>\n\n<pre><code>gradle.projectsEvaluated {\n    android.applicationVariants.each { variant -&gt;\n        def variantName = variant.name.capitalize();\n        def proguardTask = project.tasks.findByName(\n            \"transformClassesAndResourcesWithProguardFor${variantName}\")\n        def dexTask = project.tasks.findByName(\n            \"transformClassesWithDexFor${variantName}\")\n        def task = project.tasks.create(\n                name: \"processSentryProguardFor${variantName}\",\n                type: Exec) {\n            workingDir project.rootDir\n            commandLine *[\n                \"sentry-cli\",\n                \"upload-proguard\",\n                \"--write-properties\",\n                \"${project.rootDir.toPath()}/app/build/intermediates/assets\" +\n                    \"/${variant.dirName}/sentry-debug-meta.properties\",\n                variant.getMappingFile(),\n                \"--no-upload\"\n            ]\n        }\n        dexTask.dependsOn task\n        task.dependsOn proguardTask\n    }\n}\n</code></pre>\n\n<p>This shall wait until Proguard is finished, than copy this properties file to the assets. However, when I add this to my Android gradle script I get the error:</p>\n\n<blockquote>\n  <p>Could not create task\n  ':app:processSentryProguardForPlayStoreStagingDebug'.</p>\n  \n  <blockquote>\n    <p>No signature of method: java.util.ArrayList.multiply() is applicable for argument types: (ArrayList) values: [[sentry-cli, upload-proguard,\n    --write-properties, {Application-Path}/app/build/intermediates/assets/playStoreStaging/debug/sentry-debug-meta.properties,\n    ...]]   Possible solutions: multiply(java.lang.Number),\n    multiply(java.lang.Number)</p>\n  </blockquote>\n</blockquote>\n\n<p>I assume there is something wrong with the multiplication symbol * before the commandLine array. But when I remove it I get the error</p>\n\n<blockquote>\n  <p>Could not create task\n  ':app:processSentryProguardForPlayStoreStagingDebug'.</p>\n  \n  <blockquote>\n    <p>Cannot cast object 'sentry-cli' with class 'java.lang.String' to class 'int'</p>\n  </blockquote>\n</blockquote>\n\n<p>So I tried to test this with only that line</p>\n\n<pre><code>commandLine \"sentry-cli\", ...\n</code></pre>\n\n<p><strong>Which gave me another error</strong></p>\n\n<blockquote>\n  <p>What went wrong: Cannot invoke method dependsOn() on null object</p>\n</blockquote>\n\n<p>Thus I assume something went really wrong with that gradle script since it seems the dependend task can't be found. Does anyone have any idea how to fix this (or optionally have any other idea how to copy that sentry-debug-meta.properties file to my assets in another way, once Proguard/R8 is finished)?</p>\n\n<p>Thanks!</p>\n\n<p><strong>-------- EDIT --------</strong></p>\n\n<p>I noticed something important.\nThe gradle tasks are defined in a different name than what was defined in the manual. Looking at my tasks I have them named </p>\n\n<pre><code>transformClassesAndResourcesWithR8For...\n</code></pre>\n\n<p>and </p>\n\n<pre><code>transformClassesWithDexBuilderFor...\n</code></pre>\n\n<p>However, I print the variantName then for checking but it seems my tasks are incomplete.</p>\n\n<p>In my tasks list there exist</p>\n\n<pre><code>transformClassesAndResourcesWithR8ForPlayStoreStagingDebug\n</code></pre>\n\n<p>but not</p>\n\n<pre><code>transformClassesAndResourcesWithR8ForPlayStoreStagingRelease\n</code></pre>\n\n<p>and thus the task can't be found. I think that is the real problem here. So where are these gradle tasks defined?</p>\n\n<p><a href=\"https://i.stack.imgur.com/O16Qs.png\" rel=\"nofollow noreferrer\"><img src=\"https://i.stack.imgur.com/O16Qs.png\" alt=\"List of my project gradle tasks\"></a></p>\n\n<p>------- EDIT 2 --------</p>\n\n<p>Okay I noticed something strange here. Some variants don't have tasks. It makes sense that DEBUG tasks don't have R8 tasks but I found this here:</p>\n\n<blockquote>\n  <p>Variant: PlayStoreStagingRelease DexTask is null</p>\n  \n  <p>Variant: PlayStorePreviewRelease DexTask is null</p>\n  \n  <p>Variant: HockeyAppRelease DexTask is null</p>\n  \n  <p>Variant: LocalServerRelease DexTask is null</p>\n  \n  <p>Variant: PlayStoreProductionRelease DexTask is null</p>\n</blockquote>\n\n<p>So how can this be?</p>\n"
    },
    {
      "tags": [
        "android",
        "kotlinpoet"
      ],
      "answers": [
        {
          "comments": [
            {
              "owner": {
                "reputation": 127,
                "user_id": 3614254,
                "user_type": "registered",
                "profile_image": "https://www.gravatar.com/avatar/78d693b04c7c24543cd137c67ad6af1a?s=128&d=identicon&r=PG&f=1",
                "display_name": "James B",
                "link": "https://stackoverflow.com/users/3614254/james-b"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582312953,
              "post_id": 60333220,
              "comment_id": 106747761,
              "body": "Didn&#39;t even think about <code>ClassName</code>.  And to quote the docs:  &quot;The <code>ClassName</code> type is very important, and you&#39;ll need it frequently when you&#39;re using KotlinPoet.&quot;  haha!  Thank you!"
            }
          ],
          "owner": {
            "reputation": 191,
            "user_id": 4703164,
            "user_type": "registered",
            "profile_image": "https://www.gravatar.com/avatar/7e42982447dd8368def19bff01b77b44?s=128&d=identicon&r=PG&f=1",
            "display_name": "Юрий Бородкин",
            "link": "https://stackoverflow.com/users/4703164/%d0%ae%d1%80%d0%b8%d0%b9-%d0%91%d0%be%d1%80%d0%be%d0%b4%d0%ba%d0%b8%d0%bd"
          },
          "is_accepted": true,
          "score": 2,
          "creation_date": 1582266544,
          "answer_id": 60333220,
          "question_id": 60332569,
          "body": "<p>You can simply use </p>\n\n<pre><code>PropertySpec.builder(\"editor\",ClassName(\"android.content\", \"SharedPreferences.Editor\"))\n</code></pre>\n\n<p>as kotlin poet doc says - <code>Type names are dumb identifiers only and do not model the values they name.</code></p>\n"
        }
      ],
      "owner": {
        "reputation": 127,
        "user_id": 3614254,
        "user_type": "registered",
        "profile_image": "https://www.gravatar.com/avatar/78d693b04c7c24543cd137c67ad6af1a?s=128&d=identicon&r=PG&f=1",
        "display_name": "James B",
        "link": "https://stackoverflow.com/users/3614254/james-b"
      },
      "is_answered": true,
      "view_count": 28,
      "accepted_answer_id": 60333220,
      "answer_count": 1,
      "score": 3,
      "last_activity_date": 1582266544,
      "creation_date": 1582262014,
      "last_edit_date": 1582262096,
      "question_id": 60332569,
      "link": "https://stackoverflow.com/questions/60332569/android-annotation-code-generation-android-classes",
      "title": "Android Annotation Code Generation - Android Classes",
      "body": "<p>When starting to build my first code generation annotation, I've found I can't generate Android classes, such as <code>SharedPreferences</code>, since I start with a <code>Java Library</code> module in order to extend <code>AbstractProcessor</code>.\nI'm using <a href=\"https://github.com/square/kotlinpoet\" rel=\"nofollow noreferrer\">kotlinpoet</a> to generate my class, but need to create a property that is of type <code>SharedPreferences.Editor</code> which doesn't seem to be supported. I'm trying to something like the following:</p>\n\n<pre><code>val editorProperty = PropertySpec.builder(\"editor\", android.content.SharedPreferences.Editor)\n</code></pre>\n\n<p>but this fails since the <code>android</code> package is not available.  Does anyone know a workaround for this or is it just not possible?</p>\n"
    },
    {
      "tags": [
        "android",
        "bluetooth",
        "bluetooth-lowenergy",
        "beacon",
        "altbeacon"
      ],
      "answers": [
        {
          "comments": [
            {
              "owner": {
                "reputation": 33,
                "user_id": 12931453,
                "user_type": "registered",
                "profile_image": "https://www.gravatar.com/avatar/555a49e35b25f1a1d2ca0cb68a9db2a7?s=128&d=identicon&r=PG&f=1",
                "display_name": "fabchi",
                "link": "https://stackoverflow.com/users/12931453/fabchi"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582208221,
              "post_id": 60319392,
              "comment_id": 106704440,
              "body": "Thanks @davidgyoung. I tried to change after 10s the <code>mBeaconManager.setForegroundScanPeriod</code> from <code>1000ms</code> to <code>100ms</code> but it seems that at runtime you cannot change the scan value. I also tried to set up a scan of <code>300ms</code>, where the beacons emitting at <code>100ms</code> should have caught them all, but even so I can&#39;t detect them"
            },
            {
              "owner": {
                "reputation": 53887,
                "user_id": 1461050,
                "user_type": "registered",
                "accept_rate": 89,
                "profile_image": "https://i.stack.imgur.com/c8IhJ.jpg?s=128&g=1",
                "display_name": "davidgyoung",
                "link": "https://stackoverflow.com/users/1461050/davidgyoung"
              },
              "reply_to_user": {
                "reputation": 33,
                "user_id": 12931453,
                "user_type": "registered",
                "profile_image": "https://www.gravatar.com/avatar/555a49e35b25f1a1d2ca0cb68a9db2a7?s=128&d=identicon&r=PG&f=1",
                "display_name": "fabchi",
                "link": "https://stackoverflow.com/users/12931453/fabchi"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582223960,
              "post_id": 60319392,
              "comment_id": 106713062,
              "body": "Why do you say &quot;even so I can&#39;t detect them?&quot;  I thought your problem was that they were intermittently detected at 100ms?  Does it really not detect at all at 300ms?  Two points:  (1) if you cannot detect them at all at 300ms something is wrong.  Try using an off-the-shelf beacon detector like BeaconScope (also using this library) and make it says your beacons are doing what you think they are doing.  (2) You can force the scan periods to take effect by calling <code>beaconManager.updateScanPeriods()</code>"
            },
            {
              "owner": {
                "reputation": 33,
                "user_id": 12931453,
                "user_type": "registered",
                "profile_image": "https://www.gravatar.com/avatar/555a49e35b25f1a1d2ca0cb68a9db2a7?s=128&d=identicon&r=PG&f=1",
                "display_name": "fabchi",
                "link": "https://stackoverflow.com/users/12931453/fabchi"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582276058,
              "post_id": 60319392,
              "comment_id": 106728765,
              "body": "What I tried to do is to leave the beacon emission frequency at <code>100ms</code>, while from the library I set the scan frequency to <code>300ms</code>. In this way (theoretically) should I always be able to detect a packet emitted by beacons every <code>300ms</code> right? But that doesn&#39;t happen, because even with this configuration I often have 0 (i.e. if I have 3 beacons, I often only detect 2 in the callback)."
            },
            {
              "owner": {
                "reputation": 53887,
                "user_id": 1461050,
                "user_type": "registered",
                "accept_rate": 89,
                "profile_image": "https://i.stack.imgur.com/c8IhJ.jpg?s=128&g=1",
                "display_name": "davidgyoung",
                "link": "https://stackoverflow.com/users/1461050/davidgyoung"
              },
              "reply_to_user": {
                "reputation": 33,
                "user_id": 12931453,
                "user_type": "registered",
                "profile_image": "https://www.gravatar.com/avatar/555a49e35b25f1a1d2ca0cb68a9db2a7?s=128&d=identicon&r=PG&f=1",
                "display_name": "fabchi",
                "link": "https://stackoverflow.com/users/12931453/fabchi"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582370835,
              "post_id": 60319392,
              "comment_id": 106759726,
              "body": "Again, you can never detect 100 percent of transmitted packets.  If you try the BeaconScope app, it will tell you a packets per second receive rate using a scan interval of 1 second and a scan that does not stop.  This will tell you approximately what is achievable.  But remember, at 10 Hz transmission  there will always be some 100ms periods where the beacon really does not transmit any packets because the transmission rate is not precisely regular.  Similarly, in any 300ms period the beacon may transmit only one packet, and there is a 10-20% chance that any packet will not get received."
            }
          ],
          "owner": {
            "reputation": 53887,
            "user_id": 1461050,
            "user_type": "registered",
            "accept_rate": 89,
            "profile_image": "https://i.stack.imgur.com/c8IhJ.jpg?s=128&g=1",
            "display_name": "davidgyoung",
            "link": "https://stackoverflow.com/users/1461050/davidgyoung"
          },
          "is_accepted": true,
          "score": 2,
          "creation_date": 1582199802,
          "answer_id": 60319392,
          "question_id": 60317899,
          "body": "<p>Unfortunately, the library is not designed to do this, as the ranging APIs are modeled after iOS equivalents which give aggregate detections at fixed intervals as opposed to access to individual packets when they arrive.</p>\n\n<p>The main reason you often get 0 beacons detected with such a short scan period is because the scan is turned on and off every 100ms, and it takes 10ms or so to start and stop. This gives a good probability of missing the detection.</p>\n\n<p>Here's the good news: If the library ever detects two beacon packets in the same scan period then it will stop turning the scan off and your detection rate will improve. But getting it to detect two beacons in 100ms is nearly impossible of your beacon advertises at a nominal 10Hz.</p>\n\n<p>One thing you might try is to start by setting the scan period to 1 second. After you have detected a finite number of your beacons for 10 secs or so, there is a very good chance you will have detected two beacons in one scan cycle and then you can switch to a scan period of 100ms and get a higher detection rate.</p>\n\n<p><strong>You will never get a 100% detection rate</strong> for two reasons:</p>\n\n<ul>\n<li><p><strong>Not all beacon packets transmitted are received due to collisions and radio noise.</strong> At close range 80-90% is typical.</p></li>\n<li><p><strong>\"BLE advertisers do not advertise at regular intervals.</strong> They randomize when their packets are sent to avoid collisions. A nominal 10Hz transmitter might have anywhere between 70ms and 140ms between individual packets, so for fixed scan cycles of 100ms sometimes there will be 0, 1 or 2 Packers eligible to be received.</p></li>\n</ul>\n\n<p>If you really need to get callbacks on every detection, you might try setting up a NonBeaconBleScanCallback in the BeaconManager, then calling <code>BeaconManager.clearBeaconParsers()</code>. This will cause all beacons detections to be sent to that callback immediately when detected. You will then have to construct a new BeaconParser for use inside that callback to decode the beacon from the raw packet. Use <code>beaconParser.parse(...)</code></p>\n"
        }
      ],
      "owner": {
        "reputation": 33,
        "user_id": 12931453,
        "user_type": "registered",
        "profile_image": "https://www.gravatar.com/avatar/555a49e35b25f1a1d2ca0cb68a9db2a7?s=128&d=identicon&r=PG&f=1",
        "display_name": "fabchi",
        "link": "https://stackoverflow.com/users/12931453/fabchi"
      },
      "is_answered": true,
      "view_count": 30,
      "accepted_answer_id": 60319392,
      "answer_count": 1,
      "score": 3,
      "last_activity_date": 1582371058,
      "creation_date": 1582194744,
      "last_edit_date": 1582198541,
      "question_id": 60317899,
      "link": "https://stackoverflow.com/questions/60317899/altbeacon-detection-of-beacon-rssi-values-continuously-at-10hz",
      "title": "altbeacon detection of beacon RSSI values continuously at 10Hz",
      "body": "<p>I created an android (java) application that uses the altbeacon library (<a href=\"https://github.com/AltBeacon/android-beacon-library\" rel=\"nofollow noreferrer\">github page</a>) to detect beacons via the Bluetooth module.</p>\n\n<p>The Beacons are configured with Eddystone UID, protocol with an advertising interval of <code>100ms</code> and transmit power level of strong (<code>10dBm</code>).\nWhat I would like to be able to do is to detect the <code>RSSI</code> value of the beacons with a frequency of <code>10Hz</code> (i.e. 100ms).</p>\n\n<p>I've already prepared a service that implements the altbeacon library, the relevant part are showed below:</p>\n\n<pre class=\"lang-java prettyprint-override\"><code>mBeaconManager = BeaconManager.getInstanceForApplication(this);\n\n        beaconRegion = new Region(\"beacon_region\", null, null, null);\n\n        // use Eddystone protocol\n        mBeaconManager.getBeaconParsers().add(new BeaconParser().\n                setBeaconLayout(BeaconParser.EDDYSTONE_UID_LAYOUT));\n\n        mBeaconManager.setAndroidLScanningDisabled(true);\n        mBeaconManager.setForegroundScanPeriod(100l); // scan frequency\n        mBeaconManager.setForegroundBetweenScanPeriod(0);\n</code></pre>\n\n<p>and the callback <code>didRangeBeaconsInRegion</code> from which I see the beacons and get the RSSI value is this:</p>\n\n<pre class=\"lang-java prettyprint-override\"><code>@Override\n    public void didRangeBeaconsInRegion(Collection&lt;Beacon&gt; beacons, Region region) {\n        Log.i(BeaconDataCollectorService.class.getSimpleName(), String.format(\"Found %s beacons in range\", beacons.size()));\n    }\n</code></pre>\n\n<blockquote>\n  <p>What's my problem?\n  Running the app, I notice that within didRangeBeaconsInRegion, I often don't see all the beacons.</p>\n</blockquote>\n\n<p>I ran the data collection for a few seconds, creating a csv format of the data obtained, where you can see that I often have 0s (indicating that the beacon was not detected); I put the sharing of this csv on <a href=\"https://pastebin.com/zkUZC5R4\" rel=\"nofollow noreferrer\">pastebin</a> (<a href=\"https://pastebin.com/zkUZC5R4\" rel=\"nofollow noreferrer\">https://pastebin.com/zkUZC5R4</a>)</p>\n\n<p>How can I improve the scan frequency by always being able to detect all the beacons?</p>\n\n<p>altbeacon version used:</p>\n\n<pre class=\"lang-java prettyprint-override\"><code>implementation 'org.altbeacon:android-beacon-library:2.16.3'\n</code></pre>\n\n<p><strong>Android version: 9</strong></p>\n\n<p>Thanks</p>\n"
    },
    {
      "tags": [
        "android",
        "xamarin",
        "android-activity",
        "xamarin.forms",
        "xamarin.android"
      ],
      "answers": [
        {
          "owner": {
            "reputation": 878,
            "user_id": 5055977,
            "user_type": "registered",
            "accept_rate": 52,
            "profile_image": "https://www.gravatar.com/avatar/e4cba2975a4cea3802c30ec4f0a4f10a?s=128&d=identicon&r=PG&f=1",
            "display_name": "Merian",
            "link": "https://stackoverflow.com/users/5055977/merian"
          },
          "is_accepted": false,
          "score": 0,
          "creation_date": 1582223645,
          "answer_id": 60326512,
          "question_id": 60323966,
          "body": "<p>From what I can see this might be the issue. \nIf you set SplashScreen in Styles.xml something like this:</p>\n\n<pre><code>&lt;style name=\"MainTheme.Splash\" parent =\"Theme.AppCompat.Light.NoActionBar\"&gt;\n    &lt;item name=\"android:windowBackground\"&gt;@drawable/splashscreen&lt;/item&gt;\n    &lt;item name=\"android:windowNoTitle\"&gt;true&lt;/item&gt;\n    &lt;item name=\"android:windowFullscreen\"&gt;true&lt;/item&gt;\n  &lt;/style&gt;\n</code></pre>\n\n<p>And than just set the LoginActivity (login screen) as an MainLaucher the splashscreen is never disposed and it will live through your whole app. Imagine having bigger image on splash screen and drag it trough the whole app it will cause memory leaks after a while.</p>\n\n<hr>\n\n<p>How to fix it. \nCreate something like middleware activity which will be the same as the splash screen something like this </p>\n\n<pre><code>[Activity(Theme = \"@style/MainTheme.Splash\", MainLauncher = true, NoHistory = true, Icon = \"@drawable/appicon\")]\n    public class SplashActivity : AppCompatActivity\n    {\n\n        public override void OnCreate(Bundle savedInstanceState, PersistableBundle persistentState)\n        {\n            base.OnCreate(savedInstanceState, persistentState);\n\n        }\n\n        // Launches the startup task\n        protected override void OnResume()\n        {\n            base.OnResume();\n            Task startupWork = new Task(() =&gt; { SimulateStartup(); });\n            startupWork.Start();\n        }\n\n        // Simulates background work that happens behind the splash screen\n        async void SimulateStartup()\n        {\n            await Task.Delay(500); // Simulate a bit of startup work. You can remove this \n            StartActivity(typeof(LoginActivity)); // Your Activity\n\n        }\n    }\n}\n</code></pre>\n\n<p>Than just use a fresh LoginActivity</p>\n\n<pre><code>[Activity(Label = \"LoginActivity\")]\n    public class LoginActivity : AppCompatActivity\n    {\n    }\n</code></pre>\n"
        }
      ],
      "owner": {
        "reputation": 1574,
        "user_id": 3609052,
        "user_type": "registered",
        "accept_rate": 72,
        "profile_image": "https://www.gravatar.com/avatar/c02d50b316373aa3e951e38b6df413bf?s=128&d=identicon&r=PG&f=1",
        "display_name": "James Esh",
        "link": "https://stackoverflow.com/users/3609052/james-esh"
      },
      "is_answered": false,
      "view_count": 35,
      "answer_count": 1,
      "score": 3,
      "last_activity_date": 1582224045,
      "creation_date": 1582214330,
      "question_id": 60323966,
      "link": "https://stackoverflow.com/questions/60323966/softinput-adjustresize-causes-keyboard-to-flash-when-showing-or-hiding",
      "title": "SoftInput.AdjustResize causes keyboard to flash when showing or hiding",
      "body": "<p>We are having an issue in Android after setting <code>WindowSoftInputMode</code> to <code>Android.Views.SoftInput.AdjustResize</code>. When the keyboard shows or hides, our splash screen flashes right above where the keyboard is animating. This is quite annoying and jarring. </p>\n\n<p>Here is a clip of it, you can see the splash is peeking behind.</p>\n\n<p><img src=\"https://i.stack.imgur.com/vBA8m.gif\" width=\"256\"/></p>\n"
    },
    {
      "tags": [
        "android",
        "video",
        "transparent",
        "alpha"
      ],
      "answers": [
        {
          "comments": [
            {
              "owner": {
                "reputation": 61,
                "user_id": 8060944,
                "user_type": "registered",
                "profile_image": "https://i.stack.imgur.com/3wioc.jpg?s=128&g=1",
                "display_name": "Mohammad Bahadori",
                "link": "https://stackoverflow.com/users/8060944/mohammad-bahadori"
              },
              "edited": false,
              "score": 0,
              "creation_date": 1582370853,
              "post_id": 60315717,
              "comment_id": 106759730,
              "body": "Thanks but it didn&#39;t work for me.still have a black screen as it&#39;s background"
            }
          ],
          "owner": {
            "reputation": 118,
            "user_id": 10646038,
            "user_type": "registered",
            "profile_image": "https://lh3.googleusercontent.com/-lUmRw2uPHkY/AAAAAAAAAAI/AAAAAAAAABE/vQ2aeiKlS2U/photo.jpg?sz=128",
            "display_name": "Murat &#199;akır",
            "link": "https://stackoverflow.com/users/10646038/murat-%c3%87ak%c4%b1r"
          },
          "is_accepted": false,
          "score": 0,
          "creation_date": 1582187462,
          "answer_id": 60315717,
          "question_id": 60282639,
          "body": "<p>You can use videoview like this;</p>\n\n<pre><code> &lt;VideoView\n            android:id=\"@+id/video_background\"\n            android:layout_width=\"0dp\"\n            android:layout_height=\"0dp\"\n            app:layout_constraintBottom_toTopOf=\"@+id/bottom_navigation_bar\"\n            app:layout_constraintEnd_toEndOf=\"parent\"\n            android:background=\"@color/transparent\"\n            app:layout_constraintStart_toStartOf=\"parent\"\n            app:layout_constraintTop_toTopOf=\"parent\" /&gt;\n</code></pre>\n\n<p>in your activity;</p>\n\n<pre><code>videoBackgroundView = findViewById(R.id.video_background)\nval path = \"android.resource://com.example.xxxxx\" + \"/\" + R.raw.video\nvideoBackgroundView?.setVideoPath(path)\nvideoBackgroundView?.setOnPreparedListener { mp -&gt;\n    mp.isLooping = true\n    videoBackgroundView?.start()\n}\n</code></pre>\n"
        }
      ],
      "owner": {
        "reputation": 61,
        "user_id": 8060944,
        "user_type": "registered",
        "profile_image": "https://i.stack.imgur.com/3wioc.jpg?s=128&g=1",
        "display_name": "Mohammad Bahadori",
        "link": "https://stackoverflow.com/users/8060944/mohammad-bahadori"
      },
      "is_answered": false,
      "view_count": 27,
      "answer_count": 1,
      "score": 3,
      "last_activity_date": 1582193863,
      "creation_date": 1582034459,
      "last_edit_date": 1582193863,
      "question_id": 60282639,
      "link": "https://stackoverflow.com/questions/60282639/how-to-play-a-transparent-video-in-android",
      "title": "How to play a transparent Video in Android?",
      "body": "<p>I have a video with a transparent background that I want to use in my Android project.\nI found <a href=\"https://github.com/pavelsemak/alpha-movie\" rel=\"nofollow noreferrer\">this library</a> but it's too old and the performance is not so good.\nHow can I achieve my goal?</p>\n"
    },
    {
      "tags": [
        "android",
        "ios",
        "flutter",
        "dart"
      ],
      "owner": {
        "reputation": 386,
        "user_id": 9707804,
        "user_type": "registered",
        "profile_image": "https://i.stack.imgur.com/woFB7.jpg?s=128&g=1",
        "display_name": "Ratnadeep Chakraborty",
        "link": "https://stackoverflow.com/users/9707804/ratnadeep-chakraborty"
      },
      "is_answered": false,
      "view_count": 46,
      "answer_count": 0,
      "score": 3,
      "last_activity_date": 1581964141,
      "creation_date": 1581955302,
      "last_edit_date": 1581964141,
      "question_id": 60266217,
      "link": "https://stackoverflow.com/questions/60266217/how-to-solve-flutter-local-notifications-platformexception-error",
      "title": "How to solve flutter_local_notifications PlatformException error?",
      "body": "<p>I'm using <code>flutter_local_notifications</code> package in a project for the first time.</p>\n\n<p>Followed the codes given in the documentation in <code>pub.dev</code> site. But the problem is when I press the button that should trigger the notification it is causing a <code>PlatformException</code> error. </p>\n\n<p><strong>The Error</strong></p>\n\n<pre><code>E/flutter (15180): [ERROR:flutter/lib/ui/ui_dart_state.cc(148)] Unhandled Exception: PlatformException(error, Attempt to invoke virtual method 'int java.lang.Integer.intValue()' on a null object reference, null)\nE/flutter (15180): #0      StandardMethodCodec.decodeEnvelope (package:flutter/src/services/message_codecs.dart:569:7)\nE/flutter (15180): #1      MethodChannel.invokeMethod (package:flutter/src/services/platform_channel.dart:318:33)\nE/flutter (15180): &lt;asynchronous suspension&gt;\nE/flutter (15180): #2      FlutterLocalNotificationsPlugin.show (package:flutter_local_notifications/src/flutter_local_notifications.dart:120:20)\nE/flutter (15180): &lt;asynchronous suspension&gt;\nE/flutter (15180): #3      _NewsfeedState.showNotification (package:news_app/screens/newsfeed_screen.dart:129:43)\n\n</code></pre>\n\n<p>The codes are given below.</p>\n\n<p><strong>initState()</strong></p>\n\n<pre><code>  @override\n  void initState() {\n   super.initState();\n\n    var android = AndroidInitializationSettings('mipmap-hdpi/ic_launcher.png');\n    var ios = IOSInitializationSettings();\n    var initSettings = InitializationSettings(android, ios);\n    flutterLocalNotificationsPlugin.initialize(initSettings, onSelectNotification: onSelectNotification);\n\n}\n</code></pre>\n\n<p><strong>onSelectNotification()</strong> : It shows a Dialog box when the notification is pressed.</p>\n\n<pre><code>Future onSelectNotification(String payload) {\n    showDialog(context: context, builder: (_) =&gt; AlertDialog(\n      title: Text(\"Notfication\"),\n      content: Text(\"This is notification\"),\n    ));\n  }\n\n</code></pre>\n\n<p><strong>Main widget</strong> : I was using this <code>Press</code> button to check if the notification works, as a test purpose.</p>\n\n<pre><code>\n  @override\n  Widget build(BuildContext context) {\n    return Column(\n      children: &lt;Widget&gt;[\n        RaisedButton(\n          onPressed: showNotification,\n          child: Text(\n              \"Press\"\n          ),\n        ),\n      ],\n    );\n  }\n\n</code></pre>\n\n<p><strong>showNotification()</strong></p>\n\n<pre><code>showNotification() async {\n    var android = AndroidNotificationDetails(\n        'channel id',\n        'channel NAME',\n        'CHANNEL DESCRIPTION',\n        importance: Importance.Max,\n        priority: Priority.High,\n        ticker: 'ticker'\n    );\n    var ios = IOSNotificationDetails();\n    var platform = NotificationDetails(android, ios);\n    await flutterLocalNotificationsPlugin.show(0, \"New Notification\", \"I'm notification\", \n    platform, payload: \"It works\");\n  }\n\n</code></pre>\n\n<p>There is a <a href=\"https://stackoverflow.com/q/56807107/9707804\">question</a> that I found about this error, but the solution it provides was of no use for me. </p>\n\n<p>I tried changing the version of the <code>flutter_local_notifications</code> package couple of times, did not work.</p>\n\n<p>Then traced back the files that were shown in the error to see what exactly is causing <code>null</code> value. </p>\n\n<p>In the file <code>platform_channel.dart</code>, inside the <code>invokeMethod&lt;T&gt;(String method, [dynamic arguments])</code> I tried to print the <code>method</code> and <code>arguments</code> to see what is coming out to be <code>null</code>. This method is called from <code>flutter_local_notifications.dart</code>.</p>\n\n<p><strong>invokeMethod(String method, [ dynamic arguments ])</strong></p>\n\n<pre><code> @optionalTypeArgs\n  Future&lt;T&gt; invokeMethod&lt;T&gt;(String method, [ dynamic arguments ]) async {\n    assert(method != null);\n    final ByteData result = await binaryMessenger.send(\n      name,\n      codec.encodeMethodCall(MethodCall(method, arguments)),\n    );\n\n    print(arguments);  \n    print(method); \n\n    if(result == null) {\n      throw MissingPluginException('No implementation found for method $method on channel \n      $name');\n    }\n    final T typedResult = codec.decodeEnvelope(result);\n    return typedResult;\n  }\n\n</code></pre>\n\n<p>The output of arguments is,</p>\n\n<p><code>I/flutter (15180): {id: 0, title: New News!, body: I'm news., platformSpecifics: {icon: null, channelId: channel id, channelName: channel NAME, channelDescription: CHANNEL DESCRIPTION, channelShowBadge: true, channelAction: 0, importance: 5, priority: 1, playSound: true, sound: null, enableVibration: true, vibrationPattern: null, style: 0, styleInformation: {htmlFormatContent: false, htmlFormatTitle: false}, groupKey: null, setAsGroupSummary: null, groupAlertBehavior: 0, autoCancel: true, ongoing: null, colorAlpha: null, colorRed: null, colorGreen: null, colorBlue: null, largeIcon: null, largeIconBitmapSource: null, onlyAlertOnce: null, showProgress: false, maxProgress: 0, progress: 0, indeterminate: false, enableLights: false, ledColorAlpha: null, ledColorRed: null, ledColorGreen: null, ledColorBlue: null, ledOnMs: null, ledOffMs: null, ticker: ticker}, payload: I'm the one}\n</code></p>\n\n<p>You can see the <code>title</code>, <code>body</code>, <code>channel id</code>, <code>channel NAME</code> these are all the ones I gave but there are many other fields which are <code>null</code>. I'm guessing these to cause the error, but not certain. </p>\n\n<p>As I followed the documentation, I did not see any instruction for such fields.</p>\n\n<p>Some clue would mean great help. Thanks a lot for your time.</p>\n"
    }
  ],
  "has_more": true,
  "quota_max": 10000,
  "quota_remaining": 9974,
  "page": 1,
  "total": 2221,
  "type": "question"
};
                    $scope.questions = $scope.data.items;
                    $scope.fetchingQuestions = false;
                    loading();
                    console.log($scope.questions)
                }, 800)
                // httpRequest.getQuestions(queryParams).then(
                //     function (data) {
                //         console.log(data);
                //         $scope.questions = data;
                //     }, function (error) {
                //         console.log(error);
                //
                //     }, function (data) {
                //         $scope.fetchingQuestions = false;
                //     }
                // )
            };


            this.buildQueryParams = function () {
                const tags = this.tags.join(';');
                return `page=${this.page}&pagesize=${this.pageSize}&fromdate=${this.fromdate}&todate=${this.todate}&order=desc&sort=${this.sort}&tagged=${tags}&site=stackoverflow&filter=${this.filter}`;
            };

            this.get = function () {
                const queryParams = this.buildQueryParams();
                return this.fetchQuestions(queryParams)
            };

            this.get();
        }

        function loading(delay) {
            delay = delay || 100;
            const mainBody = $('.main-body');
            const loadingOverlay = $('.loading-overlay');
            if ($scope.fetchingQuestions) {
                mainBody.fadeOut(delay, function () {
                    loadingOverlay.fadeIn(delay)
                })
            } else {
                loadingOverlay.fadeOut(delay, function () {
                    mainBody.fadeIn(delay)
                })
            }
        }

        function argBuilderForGetQuestion() {
            return {
                'page': $scope.page,
                'pageSize': $scope.pageSize,
                'fromdate': null,
                'todate': null,
                'sort': $scope.sortType,
                'tags': $scope.moreTags,
                'filter': null,
            };
        }

        $scope.applyTags = function (tags) {
            $scope.moreTags = tags.join(';');
            const args = argBuilderForGetQuestion();
            console.log(args);
            getQuestions(args);

        };

        $scope.paging = function (page, pageSize) {
            $scope.pageSize = pageSize;
            if (page === 'next') {
                $scope.page += 1;
                const args = argBuilderForGetQuestion();
                console.log(args);
                getQuestions(args);
            } else if (page === 'pre') {
                $scope.page = Math.max(1, $scope.page - 1);
                const args = argBuilderForGetQuestion();
                console.log(args);
                getQuestions(args);
            }
        };

        $scope.changeSorting = function (sort) {
            $scope.sortType = sort;
            const args = argBuilderForGetQuestion();
            getQuestions(args);
        };

        // function scripts() {
        //     const mediaBodyHeight= $(window).height() - 30;
        //     $('.media .media-body-html').css('max-height', mediaBodyHeight + 'px');
        // }


        initialize()
    });
