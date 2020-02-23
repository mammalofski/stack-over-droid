angular.module("Stackoverdroid")
    .controller("questionsCtrl", function ($scope, httpRequest, $rootScope, $location, $timeout) {
        function initialize() {
            console.log('hello world in questions');
            $scope.fetchingQuestions = false;
            $scope.questions = [];
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
                    $scope.questions = {
                        "items": [{
                            "tags": ["android", "admob", "amazon-appstore"],
                            "owner": {
                                "reputation": 5282,
                                "user_id": 692168,
                                "user_type": "registered",
                                "accept_rate": 79,
                                "profile_image": "https://www.gravatar.com/avatar/31b911c42785d51ca73b172d3a38b06f?s=128&d=identicon&r=PG",
                                "display_name": "AxiomaticNexus",
                                "link": "https://stackoverflow.com/users/692168/axiomaticnexus"
                            },
                            "is_answered": false,
                            "view_count": 12,
                            "answer_count": 0,
                            "score": 0,
                            "last_activity_date": 1582384105,
                            "creation_date": 1582312920,
                            "last_edit_date": 1582384105,
                            "question_id": 60345032,
                            "link": "https://stackoverflow.com/questions/60345032/google-admob-not-working-on-apps-published-on-amazon-appstore",
                            "title": "Google AdMob not working on apps published on Amazon Appstore",
                            "body": "<p>The Background:</p>\n\n<ul>\n<li>It's a Xamarin Android app.</li>\n<li>Ads work just fine if I sideload the release version of the APK directly onto the device.</li>\n<li>Ads stop working if I grab that same APK, upload it to the Amazon Developer Console, and install it on the device through the Amazon Appstore.</li>\n<li>On the device logs, \"Ad failed to load: 3\", when requesting the ads. This is the request code returned by AdMob when there's no fill on the ad request.</li>\n<li>The device is a Samsung Galaxy S8 with Google Play Services installed. I have been able to consistently recreate this issue in a wide variety of devices.</li>\n</ul>\n\n<p>Is anyone else having this issue? I have contacted both Google and Amazon about the issue, but all I get is useless canned responses from them. I have implemented Google Ads on my apps a million times, but it's the first time dealing with the Amazon Appstore, so I'm certain this is not a code issue.</p>\n"
                        }, {
                            "tags": ["java", "android", "firebase-realtime-database"],
                            "answers": [{
                                "owner": {
                                    "reputation": 5830,
                                    "user_id": 4390557,
                                    "user_type": "registered",
                                    "accept_rate": 27,
                                    "profile_image": "https://i.stack.imgur.com/73Jri.jpg?s=128&g=1",
                                    "display_name": "VVB",
                                    "link": "https://stackoverflow.com/users/4390557/vvb"
                                },
                                "is_accepted": false,
                                "score": 0,
                                "last_activity_date": 1581874831,
                                "creation_date": 1581874831,
                                "answer_id": 60251292,
                                "question_id": 60250957,
                                "body": "<p>Try something like this</p>\n\n<pre><code>@Override\n    public void onDataChange(DataSnapshot dataSnapshot) {\n        for (DataSnapshot postSnapshot: dataSnapshot.getChildren()) {\n            // TODO: handle the post\n            YourModelClass object = postSnapshot.getValue(YourModelClass.class);\n            text.setText(object.getId().equalsIgnoreCase(scanResult) ? object.getDescription() : \"\");\n        }\n    }\n</code></pre>\n"
                            }, {
                                "comments": [{
                                    "owner": {
                                        "reputation": 21,
                                        "user_id": 12763664,
                                        "user_type": "registered",
                                        "profile_image": "https://lh3.googleusercontent.com/a-/AAuE7mDwzM09DC1McLaxzBZzVnkuaFYq_hcqzF4gYWTLrQ=k-s128",
                                        "display_name": "Jomson Pullokaran",
                                        "link": "https://stackoverflow.com/users/12763664/jomson-pullokaran"
                                    },
                                    "edited": false,
                                    "score": 0,
                                    "creation_date": 1581877877,
                                    "post_id": 60251568,
                                    "comment_id": 106574938,
                                    "body": "sir, now nothing shown in the text view...will you plz check for me.?"
                                }, {
                                    "owner": {
                                        "reputation": 10908,
                                        "user_id": 2637449,
                                        "user_type": "registered",
                                        "profile_image": "https://i.stack.imgur.com/KXkC4.jpg?s=128&g=1",
                                        "display_name": "Md. Asaduzzaman",
                                        "link": "https://stackoverflow.com/users/2637449/md-asaduzzaman"
                                    },
                                    "reply_to_user": {
                                        "reputation": 21,
                                        "user_id": 12763664,
                                        "user_type": "registered",
                                        "profile_image": "https://lh3.googleusercontent.com/a-/AAuE7mDwzM09DC1McLaxzBZzVnkuaFYq_hcqzF4gYWTLrQ=k-s128",
                                        "display_name": "Jomson Pullokaran",
                                        "link": "https://stackoverflow.com/users/12763664/jomson-pullokaran"
                                    },
                                    "edited": false,
                                    "score": 0,
                                    "creation_date": 1581878716,
                                    "post_id": 60251568,
                                    "comment_id": 106575184,
                                    "body": "I don&#39;t the <code>id</code> what do you use. Try using <code>databasefetch.orderByChild(&quot;id&quot;).equalTo(&quot;qwer&quot;)</code> and check"
                                }, {
                                    "owner": {
                                        "reputation": 21,
                                        "user_id": 12763664,
                                        "user_type": "registered",
                                        "profile_image": "https://lh3.googleusercontent.com/a-/AAuE7mDwzM09DC1McLaxzBZzVnkuaFYq_hcqzF4gYWTLrQ=k-s128",
                                        "display_name": "Jomson Pullokaran",
                                        "link": "https://stackoverflow.com/users/12763664/jomson-pullokaran"
                                    },
                                    "edited": false,
                                    "score": 0,
                                    "creation_date": 1581879404,
                                    "post_id": 60251568,
                                    "comment_id": 106575380,
                                    "body": "Sir, Md. Asaduzzaman thank you for your valuable answer. code did worked for me but i edited your code with anther one. then it worked smoothly. so thank you for solution to this question. THANK YOU SO MUCH....!"
                                }, {
                                    "owner": {
                                        "reputation": 10908,
                                        "user_id": 2637449,
                                        "user_type": "registered",
                                        "profile_image": "https://i.stack.imgur.com/KXkC4.jpg?s=128&g=1",
                                        "display_name": "Md. Asaduzzaman",
                                        "link": "https://stackoverflow.com/users/2637449/md-asaduzzaman"
                                    },
                                    "reply_to_user": {
                                        "reputation": 21,
                                        "user_id": 12763664,
                                        "user_type": "registered",
                                        "profile_image": "https://lh3.googleusercontent.com/a-/AAuE7mDwzM09DC1McLaxzBZzVnkuaFYq_hcqzF4gYWTLrQ=k-s128",
                                        "display_name": "Jomson Pullokaran",
                                        "link": "https://stackoverflow.com/users/12763664/jomson-pullokaran"
                                    },
                                    "edited": false,
                                    "score": 0,
                                    "creation_date": 1582052827,
                                    "post_id": 60251568,
                                    "comment_id": 106641606,
                                    "body": "@jomson-pullokaran, Is there any problem? Please accept the answer so that other can find it helpful. Thanks"
                                }],
                                "owner": {
                                    "reputation": 10908,
                                    "user_id": 2637449,
                                    "user_type": "registered",
                                    "profile_image": "https://i.stack.imgur.com/KXkC4.jpg?s=128&g=1",
                                    "display_name": "Md. Asaduzzaman",
                                    "link": "https://stackoverflow.com/users/2637449/md-asaduzzaman"
                                },
                                "is_accepted": true,
                                "score": 1,
                                "last_activity_date": 1581876532,
                                "creation_date": 1581876532,
                                "answer_id": 60251568,
                                "question_id": 60250957,
                                "body": "<p>No need to run multiple query to filter the data based on <code>id</code>. Check below:</p>\n\n<pre><code>databasefetch = FirebaseDatabase.getInstance().getReference(\"save\");\ndatabasefetch.orderByChild(\"id\").equalTo(scanResult).addValueEventListener(new ValueEventListener() {\n    @Override\n    public void onDataChange(@NonNull DataSnapshot dataSnapshot) {\n\n        String  toSpeak = \"\";\n\n        for (DataSnapshot childSnapshot: dataSnapshot.getChildren()) {\n\n            String name = childSnapshot.child(\"name\").getValue(String.class);\n            String price = childSnapshot.child(\"price\").getValue(String.class);\n            String details = childSnapshot.child(\"details\").getValue(String.class);\n\n            toSpeak = name + \", \" + price + \", \" + details;\n        }\n\n        text.setText(toSpeak);\n\n        txt.speak(toSpeak, TextToSpeech.QUEUE_FLUSH,null);\n    }\n\n    @Override\n    public void onCancelled(@NonNull DatabaseError databaseError) {\n\n    }\n});\n</code></pre>\n"
                            }],
                            "owner": {
                                "reputation": 21,
                                "user_id": 12763664,
                                "user_type": "registered",
                                "profile_image": "https://lh3.googleusercontent.com/a-/AAuE7mDwzM09DC1McLaxzBZzVnkuaFYq_hcqzF4gYWTLrQ=k-s128",
                                "display_name": "Jomson Pullokaran",
                                "link": "https://stackoverflow.com/users/12763664/jomson-pullokaran"
                            },
                            "is_answered": true,
                            "view_count": 39,
                            "answer_count": 2,
                            "score": 1,
                            "last_activity_date": 1582383841,
                            "creation_date": 1581872726,
                            "last_edit_date": 1582383841,
                            "question_id": 60250957,
                            "link": "https://stackoverflow.com/questions/60250957/i-want-to-fetch-data-full-in-a-single-textview-from-firebase-database",
                            "title": "i want to fetch data full in a single Textview from firebase database",
                            "body": "<p>I have created a barcode scanner app and it reads the barcode id and needed the output as voice output. in order to read all the things i need to fetch all data together in one single <code>TextView</code>. I did my level best to add the query from database. but it only shows in <code>TextView</code> as <code>com.google.firebase.database.Query@9fc9e4d</code> and my app <code>TTS</code> engine reads it clearly. But i need to set it as all data under a single <code>TextView</code> from database to speak out. please help me???? here only i attached the result handling method.</p>\n\n<pre><code>@Override \npublic void handleResult(Result result) { final String scanResult = result.getText();\n\n    databasefetch = FirebaseDatabase.getInstance().getReference(\"save\");\n    databasefetch.addValueEventListener(new ValueEventListener() {\n        @Override\n        public void onDataChange(@NonNull DataSnapshot dataSnapshot) {\n\n\n\n            setContentView(R.layout.activity_second);\n            TextView text = (TextView) findViewById(R.id.textView3);\n            String tst = databasefetch.child(\"save\").orderByChild(\"id\").equalTo(scanResult).toString();\n            text.setText(tst);\n\n\n\n            //text to speech\n            String  toSpeak=text.getText().toString();\n            //Toast.makeText(getApplicationContext(),toSpeak,Toast.LENGTH_SHORT).show();\n            txt.speak(toSpeak,TextToSpeech.QUEUE_FLUSH,null);\n\n\n        }\n\n        @Override\n        public void onCancelled(@NonNull DatabaseError databaseError) {\n\n        }\n    });\n}\n</code></pre>\n\n<p><a href=\"https://i.stack.imgur.com/C7Gwh.jpg\" rel=\"nofollow noreferrer\"><img src=\"https://i.stack.imgur.com/C7Gwh.jpg\" alt=\"enter image description here\"></a></p>\n\n<p><a href=\"https://i.stack.imgur.com/Hxyhs.jpg\" rel=\"nofollow noreferrer\"><img src=\"https://i.stack.imgur.com/Hxyhs.jpg\" alt=\"enter image description here\"></a></p>\n"
                        }, {
                            "tags": ["android", "unit-testing", "kotlin", "mvvm", "mockk"],
                            "answers": [{
                                "owner": {
                                    "reputation": 2515,
                                    "user_id": 2565340,
                                    "user_type": "registered",
                                    "profile_image": "https://www.gravatar.com/avatar/14fe70113561f37381444c923d22051d?s=128&d=identicon&r=PG",
                                    "display_name": "Brucelet",
                                    "link": "https://stackoverflow.com/users/2565340/brucelet"
                                },
                                "is_accepted": false,
                                "score": 0,
                                "last_activity_date": 1582382985,
                                "creation_date": 1582382985,
                                "answer_id": 60353351,
                                "question_id": 60288406,
                                "body": "<p>In your <code>setup()</code> method, you're creating a viewmodel first and then configuring your mock reponse in the repository after. However, your viewmodel tries to get that response from the repository immediately on instantiation (in <code>fetchDrillTypes()</code> which is called from the <code>init</code> block), so it happens before the mock is ready. You just need to reorder the calls in <code>setup()</code> so that <code>drillsSelectionViewModel = ...</code> happens last.</p>\n"
                            }],
                            "owner": {
                                "reputation": 3,
                                "user_id": 11313307,
                                "user_type": "registered",
                                "profile_image": "https://lh5.googleusercontent.com/-mk0uss1jsfo/AAAAAAAAAAI/AAAAAAAAAzk/0tgn8r-BgyM/photo.jpg?sz=128",
                                "display_name": "Sir Isaac",
                                "link": "https://stackoverflow.com/users/11313307/sir-isaac"
                            },
                            "is_answered": false,
                            "view_count": 117,
                            "answer_count": 1,
                            "score": 0,
                            "last_activity_date": 1582382985,
                            "creation_date": 1582055294,
                            "question_id": 60288406,
                            "link": "https://stackoverflow.com/questions/60288406/android-kotlin-unit-test-failing-with-io-mockk-mockkexception-no-answer-found-f",
                            "title": "Android Kotlin Unit test failing with io.mockk.MockKException: no answer found for",
                            "body": "<p>I am trying to write some unit tests for my ViewModel. I am using Mockk and Junit5. </p>\n\n<p>What should happen: \nThe mockked repository returns fakeresponse, I call the fun in the VM, it sets the livedata to be the fake response data.</p>\n\n<p>What actually happens: </p>\n\n<pre><code>Exception in thread \"DefaultDispatcher-worker-2 @coroutine#1\" io.mockk.MockKException: no answer found for: DrillRepository(#1).loadDrillTypes()\n    at io.mockk.impl.stub.MockKStub.defaultAnswer(MockKStub.kt:90)\n    at io.mockk.impl.stub.MockKStub.answer(MockKStub.kt:42)\n    at io.mockk.impl.recording.states.AnsweringState.call(AnsweringState.kt:16)\n    at io.mockk.impl.recording.CommonCallRecorder.call(CommonCallRecorder.kt:53)\n    at io.mockk.impl.stub.MockKStub.handleInvocation(MockKStub.kt:263)\n    at io.mockk.impl.instantiation.JvmMockFactoryHelper$mockHandler$1.invocation(JvmMockFactoryHelper.kt:25)\n    at io.mockk.proxy.jvm.advice.Interceptor.call(Interceptor.kt:20)\n    at com.nikolam.basketpro.data.DrillRepository.loadDrillTypes(DrillRepository.kt:11)\n    at com.nikolam.basketpro.ui.drills.selection.DrillsSelectionViewModel$fetchDrillTypes$1.invokeSuspend(DrillsSelectionViewModel.kt:41)\n    at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:33)\n    at kotlinx.coroutines.DispatchedTask.run(Dispatched.kt:241)\n    at kotlinx.coroutines.scheduling.CoroutineScheduler.runSafely(CoroutineScheduler.kt:594)\n    at kotlinx.coroutines.scheduling.CoroutineScheduler.access$runSafely(CoroutineScheduler.kt:60)\n    at kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.run(CoroutineScheduler.kt:740)\n\norg.opentest4j.AssertionFailedError: \nExpected :[DrillsType(drillType_title=title1, drillType_imageUrl=url1), DrillsType(drillType_title=title2, drillType_imageUrl=url2)]\nActual   :null\n&lt;Click to see difference&gt;\n\n\n    at org.junit.jupiter.api.AssertionUtils.fail(AssertionUtils.java:55)\n    at org.junit.jupiter.api.AssertionUtils.failNotEqual(AssertionUtils.java:62)\n    at org.junit.jupiter.api.AssertEquals.assertEquals(AssertEquals.java:182)\n    at org.junit.jupiter.api.AssertEquals.assertEquals(AssertEquals.java:177)\n    at org.junit.jupiter.api.Assertions.assertEquals(Assertions.java:1124)\n    at com.nikolam.basketpro.ui.drills.selection.DrillsSelectionViewModelTest.drillTypeListWillBePopulatedOnSuccess(DrillsSelectionViewModelTest.kt:43)\n    at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n    at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n    at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n    at java.lang.reflect.Method.invoke(Method.java:498)\n    at org.junit.platform.commons.util.ReflectionUtils.invokeMethod(ReflectionUtils.java:686)\n    at org.junit.jupiter.engine.execution.MethodInvocation.proceed(MethodInvocation.java:60)\n    at org.junit.jupiter.engine.execution.InvocationInterceptorChain$ValidatingInvocation.proceed(InvocationInterceptorChain.java:131)\n    at org.junit.jupiter.engine.extension.TimeoutExtension.intercept(TimeoutExtension.java:149)\n    at org.junit.jupiter.engine.extension.TimeoutExtension.interceptTestableMethod(TimeoutExtension.java:140)\n    at org.junit.jupiter.engine.extension.TimeoutExtension.interceptTestMethod(TimeoutExtension.java:84)\n    at org.junit.jupiter.engine.execution.ExecutableInvoker$ReflectiveInterceptorCall.lambda$ofVoidMethod$0(ExecutableInvoker.java:115)\n    at org.junit.jupiter.engine.execution.ExecutableInvoker.lambda$invoke$0(ExecutableInvoker.java:105)\n    at org.junit.jupiter.engine.execution.InvocationInterceptorChain$InterceptedInvocation.proceed(InvocationInterceptorChain.java:106)\n    at org.junit.jupiter.engine.execution.InvocationInterceptorChain.proceed(InvocationInterceptorChain.java:64)\n    at org.junit.jupiter.engine.execution.InvocationInterceptorChain.chainAndInvoke(InvocationInterceptorChain.java:45)\n    at org.junit.jupiter.engine.execution.InvocationInterceptorChain.invoke(InvocationInterceptorChain.java:37)\n    at org.junit.jupiter.engine.execution.ExecutableInvoker.invoke(ExecutableInvoker.java:104)\n    at org.junit.jupiter.engine.execution.ExecutableInvoker.invoke(ExecutableInvoker.java:98)\n    at org.junit.jupiter.engine.descriptor.TestMethodTestDescriptor.lambda$invokeTestMethod$6(TestMethodTestDescriptor.java:205)\n    at org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)\n    at org.junit.jupiter.engine.descriptor.TestMethodTestDescriptor.invokeTestMethod(TestMethodTestDescriptor.java:201)\n    at org.junit.jupiter.engine.descriptor.TestMethodTestDescriptor.execute(TestMethodTestDescriptor.java:137)\n    at org.junit.jupiter.engine.descriptor.TestMethodTestDescriptor.execute(TestMethodTestDescriptor.java:71)\n    at org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$5(NodeTestTask.java:135)\n    at org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)\n    at org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$7(NodeTestTask.java:125)\n    at org.junit.platform.engine.support.hierarchical.Node.around(Node.java:135)\n    at org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$8(NodeTestTask.java:123)\n    at org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)\n    at org.junit.platform.engine.support.hierarchical.NodeTestTask.executeRecursively(NodeTestTask.java:122)\n    at org.junit.platform.engine.support.hierarchical.NodeTestTask.execute(NodeTestTask.java:80)\n    at java.util.ArrayList.forEach(ArrayList.java:1257)\n    at org.junit.platform.engine.support.hierarchical.SameThreadHierarchicalTestExecutorService.invokeAll(SameThreadHierarchicalTestExecutorService.java:38)\n    at org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$5(NodeTestTask.java:139)\n    at org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)\n    at org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$7(NodeTestTask.java:125)\n    at org.junit.platform.engine.support.hierarchical.Node.around(Node.java:135)\n    at org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$8(NodeTestTask.java:123)\n    at org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)\n    at org.junit.platform.engine.support.hierarchical.NodeTestTask.executeRecursively(NodeTestTask.java:122)\n    at org.junit.platform.engine.support.hierarchical.NodeTestTask.execute(NodeTestTask.java:80)\n    at java.util.ArrayList.forEach(ArrayList.java:1257)\n    at org.junit.platform.engine.support.hierarchical.SameThreadHierarchicalTestExecutorService.invokeAll(SameThreadHierarchicalTestExecutorService.java:38)\n    at org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$5(NodeTestTask.java:139)\n    at org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)\n    at org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$7(NodeTestTask.java:125)\n    at org.junit.platform.engine.support.hierarchical.Node.around(Node.java:135)\n    at org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$8(NodeTestTask.java:123)\n    at org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)\n    at org.junit.platform.engine.support.hierarchical.NodeTestTask.executeRecursively(NodeTestTask.java:122)\n    at org.junit.platform.engine.support.hierarchical.NodeTestTask.execute(NodeTestTask.java:80)\n    at org.junit.platform.engine.support.hierarchical.SameThreadHierarchicalTestExecutorService.submit(SameThreadHierarchicalTestExecutorService.java:32)\n    at org.junit.platform.engine.support.hierarchical.HierarchicalTestExecutor.execute(HierarchicalTestExecutor.java:57)\n    at org.junit.platform.engine.support.hierarchical.HierarchicalTestEngine.execute(HierarchicalTestEngine.java:51)\n    at org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:248)\n    at org.junit.platform.launcher.core.DefaultLauncher.lambda$execute$5(DefaultLauncher.java:211)\n    at org.junit.platform.launcher.core.DefaultLauncher.withInterceptedStreams(DefaultLauncher.java:226)\n    at org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:199)\n    at org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:132)\n    at com.intellij.junit5.JUnit5IdeaTestRunner.startRunnerWithArgs(JUnit5IdeaTestRunner.java:69)\n    at com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n    at com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n    at com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n</code></pre>\n\n<p>This is the test</p>\n\n<pre><code>@ExtendWith(value = [InstantExecutorExtension::class, TestSchedulerExtension::class])\ninternal class DrillsSelectionViewModelTest{\n\n    val mockkDrillRepository = mockk&lt;DrillRepository&gt;()\n\n    lateinit var drillsSelectionViewModel : DrillsSelectionViewModel\n\n    @BeforeEach\n    fun setup(){\n\n        drillsSelectionViewModel = DrillsSelectionViewModel(mockkDrillRepository)\n\n        val fakeResponse = Observable.just(DrillsType(\"title1\", \"url1\"), DrillsType(\"title2\",\"url2\"))\n\n\n        every{ mockkDrillRepository.loadDrillTypes()} returns fakeResponse\n\n    }\n\n    @Test\n    fun `should update the livedata with correct data from the repository`(){\n\n        drillsSelectionViewModel.fetchDrillTypes()\n\n        assertEquals(arrayListOf(DrillsType(\"title1\", \"url1\"), DrillsType(\"title2\",\"url2\")), getValue(drillsSelectionViewModel.drillsTypeList.value))\n\n    }\n\n}\n</code></pre>\n\n<p>These are the two classes that are extended in the test</p>\n\n<pre><code>class InstantExecutorExtension : BeforeEachCallback, AfterEachCallback {\n\n    override fun beforeEach(context: ExtensionContext?) {\n        ArchTaskExecutor.getInstance().setDelegate(object : TaskExecutor() {\n            override fun executeOnDiskIO(runnable: Runnable) {\n                runnable.run()\n            }\n\n            override fun postToMainThread(runnable: Runnable) {\n                runnable.run()\n            }\n\n            override fun isMainThread(): Boolean {\n                return true\n            }\n        })\n    }\n\n    override fun afterEach(context: ExtensionContext?) {\n        ArchTaskExecutor.getInstance().setDelegate(null)\n    }\n\n}\n</code></pre>\n\n<pre><code>class TestSchedulerExtension : BeforeTestExecutionCallback, AfterTestExecutionCallback {\n\n    override fun beforeTestExecution(context: ExtensionContext?) {\n        RxJavaPlugins.setIoSchedulerHandler { Schedulers.trampoline() }\n        RxJavaPlugins.setComputationSchedulerHandler { Schedulers.trampoline() }\n        RxJavaPlugins.setNewThreadSchedulerHandler { Schedulers.trampoline() }\n        RxAndroidPlugins.setMainThreadSchedulerHandler { Schedulers.trampoline() }\n    }\n\n    override fun afterTestExecution(context: ExtensionContext?) {\n        RxJavaPlugins.reset()\n        RxAndroidPlugins.reset()\n    }\n\n}\n</code></pre>\n\n<p>This is the SUT</p>\n\n<pre><code>class DrillsSelectionViewModel(private val repository: DrillRepository): ViewModel() {\n\n    private val compositeDisposable = CompositeDisposable()\n\n    private var _drillsTypeList = MutableLiveData&lt;ArrayList&lt;DrillsType&gt;&gt;()\n    val drillsTypeList: LiveData&lt;ArrayList&lt;DrillsType&gt;&gt;\n        get() = _drillsTypeList\n\n\n    init{\n\n        fetchDrillTypes()\n    }\n\n    fun fetchDrillTypes()\n    {\n\n        val list = ArrayList&lt;DrillsType&gt;()\n\n        viewModelScope.launch(Dispatchers.IO) {\n            compositeDisposable += repository.loadDrillTypes()\n                .subscribeWith(object : DisposableObserver&lt;DrillsType&gt;() {\n\n                    override fun onError(e: Throwable) {\n                        Log.d(\"TAG\", e?.message)\n                    }\n\n                    override fun onNext(data: DrillsType) {\n                        Log.d(\"TAG\", \"data is \" + data.toString())\n                        list.add(data)\n                    }\n\n                    override fun onComplete() {\n                        Log.d(\"TAG\", \"COMPLETE\")\n                        _drillsTypeList.postValue(list)\n                    }\n                })\n        }\n    }\n\n\n    override fun onCleared() {\n        super.onCleared()\n        if (!compositeDisposable.isDisposed) {\n            compositeDisposable.dispose()\n        }\n    }\n\n}\n</code></pre>\n\n<p>The DOC</p>\n\n<pre><code>\n\n    fun loadDrillTypes(): Observable&lt;DrillsType&gt; {\n        return remoteDataSource.loadDrillTypes()\n    }\n\n\n    fun loadDrillList(drillType : String): Observable&lt;Drill&gt; {\n        return remoteDataSource.loadDrillList(drillType)\n    }\n}\n</code></pre>\n\n<p>What I tried: </p>\n\n<ol>\n<li><p>Removing the coroutines from the mix. I thought that removing \"viewmodelscope.launch\" would make the test work as I thought it had something to do with coroutines and them not finishing or something in time or not listening on the proper thread.</p></li>\n<li><p>Tried using the 2 extended classes posted below(to replace the Instant Execution Rule in JUnit4)</p></li>\n<li><p>Googling a lot to find similar issues...</p></li>\n</ol>\n\n<p>Sorry for the long post, any more info or code that you need feel free to ask.If possible also point out some mistakes/ things that could be done better. Any answer with explanation is much appreciated. I really want to understand what is the underlying issue. Thank you very much! </p>\n\n<p>edit: I am considering it might be something due to RXKotlin</p>\n"
                        }, {
                            "tags": ["java", "android"],
                            "answers": [{
                                "comments": [{
                                    "owner": {
                                        "reputation": 3624,
                                        "user_id": 4729721,
                                        "user_type": "registered",
                                        "profile_image": "https://www.gravatar.com/avatar/a68628b01886ee639255e69111990484?s=128&d=identicon&r=PG&f=1",
                                        "display_name": "a_local_nobody",
                                        "link": "https://stackoverflow.com/users/4729721/a-local-nobody"
                                    },
                                    "edited": false,
                                    "score": 0,
                                    "creation_date": 1581840358,
                                    "post_id": 60246416,
                                    "comment_id": 106565567,
                                    "body": "there&#39;s no need to pass context in to a recycler adapter, you can get it from the viewholder"
                                }],
                                "owner": {
                                    "reputation": 151,
                                    "user_id": 10554417,
                                    "user_type": "registered",
                                    "profile_image": "https://lh6.googleusercontent.com/-Tzy1y6L5zf8/AAAAAAAAAAI/AAAAAAAAALc/PY4gbJ8mzQU/photo.jpg?sz=128",
                                    "display_name": "Salar Arabpour",
                                    "link": "https://stackoverflow.com/users/10554417/salar-arabpour"
                                },
                                "is_accepted": false,
                                "score": 0,
                                "last_activity_date": 1581838887,
                                "creation_date": 1581838887,
                                "answer_id": 60246416,
                                "question_id": 60246159,
                                "body": "<p>you should post your full adapter class, cause we should see where do you initialize mContext.but by default you can get context by constructor method of adapter.</p>\n\n<p>something like:</p>\n\n<pre><code>private List&lt;Obj&gt; list;\nprivate Context mContext;\n\npublic AdapterRvBid(List&lt;Obj&gt; list, Context mContext) {\n    this.list = list;\n    this.mContext= mContext;\n}\n</code></pre>\n"
                            }, {
                                "comments": [{
                                    "owner": {
                                        "reputation": 198,
                                        "user_id": 6382534,
                                        "user_type": "registered",
                                        "profile_image": "https://i.stack.imgur.com/ioacX.jpg?s=128&g=1",
                                        "display_name": "Edgar",
                                        "link": "https://stackoverflow.com/users/6382534/edgar"
                                    },
                                    "edited": false,
                                    "score": 0,
                                    "creation_date": 1581919747,
                                    "post_id": 60246913,
                                    "comment_id": 106583803,
                                    "body": "static Context objects lead to memory leaks.. check out the documentation on context and the adapter class.."
                                }, {
                                    "owner": {
                                        "reputation": 21,
                                        "user_id": 11905562,
                                        "user_type": "registered",
                                        "profile_image": "https://lh6.googleusercontent.com/-6LckUwQ00eM/AAAAAAAAAAI/AAAAAAAAABg/95kh8GfNRHo/photo.jpg?sz=128",
                                        "display_name": "Udit Pandya",
                                        "link": "https://stackoverflow.com/users/11905562/udit-pandya"
                                    },
                                    "reply_to_user": {
                                        "reputation": 198,
                                        "user_id": 6382534,
                                        "user_type": "registered",
                                        "profile_image": "https://i.stack.imgur.com/ioacX.jpg?s=128&g=1",
                                        "display_name": "Edgar",
                                        "link": "https://stackoverflow.com/users/6382534/edgar"
                                    },
                                    "edited": false,
                                    "score": 0,
                                    "creation_date": 1582019412,
                                    "post_id": 60246913,
                                    "comment_id": 106622842,
                                    "body": "@Edgar alright.Thank you"
                                }],
                                "owner": {
                                    "reputation": 21,
                                    "user_id": 11905562,
                                    "user_type": "registered",
                                    "profile_image": "https://lh6.googleusercontent.com/-6LckUwQ00eM/AAAAAAAAAAI/AAAAAAAAABg/95kh8GfNRHo/photo.jpg?sz=128",
                                    "display_name": "Udit Pandya",
                                    "link": "https://stackoverflow.com/users/11905562/udit-pandya"
                                },
                                "is_accepted": true,
                                "score": 0,
                                "last_activity_date": 1581843426,
                                "creation_date": 1581843426,
                                "answer_id": 60246913,
                                "question_id": 60246159,
                                "body": "<p>i made an edit like this in my main activity : </p>\n\n<pre><code>   public static Context mContext;\n\npublic static Context getContext() {\n    return mContext;\n}\n</code></pre>\n\n<p>and later using this context i was able to pass an intent to call another activity !</p>\n\n<pre><code>Intent intent = new Intent( MyRequestActivity.getContext() , ViewDonorListActivity.class );\n                        MyRequestActivity.getContext().startActivity( intent );\n</code></pre>\n"
                            }, {
                                "owner": {
                                    "reputation": 184,
                                    "user_id": 8871644,
                                    "user_type": "registered",
                                    "profile_image": "https://i.stack.imgur.com/upWv1.jpg?s=128&g=1",
                                    "display_name": "Roman",
                                    "link": "https://stackoverflow.com/users/8871644/roman"
                                },
                                "is_accepted": false,
                                "score": 0,
                                "last_activity_date": 1582382070,
                                "creation_date": 1582382070,
                                "answer_id": 60353189,
                                "question_id": 60246159,
                                "body": "<p>Simply use <strong>context</strong> from <strong>itemView</strong> of ViewHolder - </p>\n\n<p><strong>Solution</strong></p>\n\n<pre><code>Context context = holder.itemView.getContext();\ncontext.startActivity(new Intent(context,ViewDonorListActivity.class));\n</code></pre>\n"
                            }],
                            "owner": {
                                "reputation": 21,
                                "user_id": 11905562,
                                "user_type": "registered",
                                "profile_image": "https://lh6.googleusercontent.com/-6LckUwQ00eM/AAAAAAAAAAI/AAAAAAAAABg/95kh8GfNRHo/photo.jpg?sz=128",
                                "display_name": "Udit Pandya",
                                "link": "https://stackoverflow.com/users/11905562/udit-pandya"
                            },
                            "is_answered": true,
                            "view_count": 45,
                            "accepted_answer_id": 60246913,
                            "answer_count": 3,
                            "score": 2,
                            "last_activity_date": 1582382070,
                            "creation_date": 1581836417,
                            "last_edit_date": 1581838210,
                            "question_id": 60246159,
                            "link": "https://stackoverflow.com/questions/60246159/how-to-pass-context-for-an-intent-from-a-method-of-a-class",
                            "title": "How to pass context for an intent from a method of a class?",
                            "body": "<p>Error :  java.lang.NullPointerException: Attempt to invoke virtual method 'android.content.Context android.content.Context.getApplicationContext()' on a null object reference\n        at com.adriitsolutions.prarthana.AdapterForListView.MyRequestForBloodRequirementListRecyclerView$1.onClick(MyRequestForBloodRequirementListRecyclerView.java:153)\n        at android.view.View.performClick(View.java:6935)\nHere is my code.</p>\n\n<p>java\n((myViewHolderForRecyclerViewOfMenu) viewHolder).iv_my_request_view.setOnClickListener( new View.OnClickListener() {\n        @Override\n        public void onClick(View v) {\n        // showLeadDetails(position);\n        context.startActivity(new Intent( context , ViewDonorListActivity.class));\n        Log.e(\"ONCLICK\", \"View Request\");\n    }\n});</p>\n\n<pre><code>\n\nAdapter :  @Override\n    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {\n\n\n\n        holder.sendAt.setText(mData.get(position).getSendAt());\n        holder.radius.setText(mData.get(position).getRadius());\n        holder.acceptedStatus.setText(mData.get(position).getAcceptedStatus());\n\n        holder.requestBloodGrpType.setImageResource(mData.get( position ).getRequestBloodGrpType() );\n        //holder.requestUrgenyType.setImageResource( mData.get( position ).getRequestUrgencyType() );\n\n        holder.viewRequest.setOnClickListener( new View.OnClickListener() {\n            @Override\n            public void onClick(View v) {\n                mContext.startActivity(new Intent(mContext,ViewDonorListActivity.class));\n            }\n        } );\n\n       /* holder.buttonView.setOnClickListener(new View.OnClickListener() {\n            @Override\n            public void onClick(View v) {\n                mContext.startActivity(new Intent(mContext,ViewDonorListActivity.class));\n            }\n        });*/\n\n    }\n</code></pre>\n"
                        }, {
                            "tags": ["android", "firebase", "android-recyclerview", "google-cloud-firestore", "itemtouchhelper"],
                            "answers": [{
                                "comments": [{
                                    "owner": {
                                        "reputation": 50,
                                        "user_id": 12824914,
                                        "user_type": "registered",
                                        "profile_image": "https://lh3.googleusercontent.com/a-/AAuE7mA5p-GiJycYhuC2ch_GmCgUFihVlJl4U2n91qo_TDU=k-s128=k-s128",
                                        "display_name": "Aaron DCosta",
                                        "link": "https://stackoverflow.com/users/12824914/aaron-dcosta"
                                    },
                                    "edited": false,
                                    "score": 0,
                                    "creation_date": 1582294203,
                                    "post_id": 60339947,
                                    "comment_id": 106738264,
                                    "body": "I don&#39;t think you have understood my query. It is not a question of existing user or other user. I want it to differentiate whether the item was added by the existing user or other user."
                                }],
                                "owner": {
                                    "reputation": 2508,
                                    "user_id": 1679754,
                                    "user_type": "registered",
                                    "profile_image": "https://i.stack.imgur.com/3HP6m.png?s=128&g=1",
                                    "display_name": "Silversky Technology",
                                    "link": "https://stackoverflow.com/users/1679754/silversky-technology"
                                },
                                "is_accepted": false,
                                "score": 0,
                                "last_activity_date": 1582292923,
                                "creation_date": 1582292923,
                                "answer_id": 60339947,
                                "question_id": 60339404,
                                "body": "<p>You can use this method of ItemTouchHelper.Callback Class to non swipe row</p>\n\n<pre><code>@Override\npublic int getSwipeDirs(RecyclerView recyclerView, RecyclerView.ViewHolder holder) {\n    int position = holder.getAdapterPosition();\n    return createSwipeFlags(position);\n}\n\nprivate int createSwipeFlags(int position) {\n  return position == 0 ? 0 : super.getSwipeDirs(recyclerView, viewHolder);\n}\n</code></pre>\n\n<p>In this case i have compare with position you can check here existing user or other user </p>\n"
                            }, {
                                "owner": {
                                    "reputation": 50,
                                    "user_id": 12824914,
                                    "user_type": "registered",
                                    "profile_image": "https://lh3.googleusercontent.com/a-/AAuE7mA5p-GiJycYhuC2ch_GmCgUFihVlJl4U2n91qo_TDU=k-s128=k-s128",
                                    "display_name": "Aaron DCosta",
                                    "link": "https://stackoverflow.com/users/12824914/aaron-dcosta"
                                },
                                "is_accepted": false,
                                "score": 0,
                                "last_activity_date": 1582381200,
                                "last_edit_date": 1582381200,
                                "creation_date": 1582296577,
                                "answer_id": 60341063,
                                "question_id": 60339404,
                                "body": "<p>I finally was able to get the solution after going through <a href=\"https://gist.github.com/kitek/33e85cbc3b9fadbc303ff5b78cb50ecc\" rel=\"nofollow noreferrer\">this</a> and with the help of the answer provided by theThapa. </p>\n\n<p>Since his answer was in kotlin and I am developing my app in Java, I had to play around my <code>getMovementFlag()</code> to make it something similar to the one he provided and do the following changes inside<code>ItemTouchHelper.SimpleCallback</code></p>\n\n<pre><code>@Override\n            public int getMovementFlags(@NonNull RecyclerView recyclerView, @NonNull RecyclerView.ViewHolder viewHolder) {\n                    if (adapter.getSnapshots().get(viewHolder.getAdapterPosition()).getUserId().equals(FirebaseAuth.getInstance().getCurrentUser().getUid())) {\n                        //do nothing;\n                    }\n                    else {\n                        return 0;\n                    }\n                    return super.getMovementFlags(recyclerView, viewHolder);\n            }\n</code></pre>\n\n<p>Once again my sincere thanks to theThapa for helping me with this.</p>\n"
                            }, {
                                "owner": {
                                    "reputation": 194,
                                    "user_id": 5390707,
                                    "user_type": "registered",
                                    "profile_image": "https://i.stack.imgur.com/eMri2.jpg?s=128&g=1",
                                    "display_name": "theThapa",
                                    "link": "https://stackoverflow.com/users/5390707/thethapa"
                                },
                                "is_accepted": false,
                                "score": 0,
                                "last_activity_date": 1582304834,
                                "last_edit_date": 1582304834,
                                "creation_date": 1582301351,
                                "answer_id": 60342434,
                                "question_id": 60339404,
                                "body": "<p>@AaronDCosta We can add a property <code>userId</code> to the Item being bind to the RecyclerView. Please refer to the following code snippet and modify as per your requirement.</p>\n\nData Class\n\n<pre><code>data class Item(var title: String, var message: String, var userId: String)\n</code></pre>\n\nAdapter Class\n\n<pre><code>class SomeAdapter : RecyclerView.Adapter&lt;RecyclerView.ViewHolder&gt;() {\n\nvar items: List&lt;Item&gt; = emptyList()\n    set(value) {\n        field = value\n        notifyDataSetChanged()\n    }\n\nfun getItemAtPosition(position: Int) = items.getOrNull(position)\n\noverride fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RecyclerView.ViewHolder {\n    TODO(\"not implemented\") //To change body of created functions use File | Settings | File Templates.\n}\n\noverride fun getItemCount(): Int {\n    TODO(\"not implemented\") //To change body of created functions use File | Settings | File Templates.\n}\n\noverride fun onBindViewHolder(holder: RecyclerView.ViewHolder, position: Int) {\n    TODO(\"not implemented\") //To change body of created functions use File | Settings | File Templates.\n  }}\n</code></pre>\n\nAttach the ItemTouchHelper callback\n\n<pre><code>fun attachSwipeCallback() {\n\nval adapter: SomeAdapter = SomeAdapter()\nval currentUserId = \"CurrentUserId\"\n\nval itemTouchHelper = object : ItemTouchHelper.Callback() {\n\n    override fun getMovementFlags(recyclerView: RecyclerView, viewHolder: RecyclerView.ViewHolder): Int {\n        return adapter.getItemAtPosition(viewHolder.adapterPosition)?.let { item -&gt;\n            if (item.userId == currentUserId) {\n                ItemTouchHelper.LEFT\n            } else {\n                0\n            }\n        } ?: 0\n    }\n\n    override fun onMove(recyclerView: RecyclerView, viewHolder: RecyclerView.ViewHolder, target: RecyclerView.ViewHolder): Boolean {\n        TODO(\"Implement Move\")\n    }\n\n    override fun onSwiped(viewHolder: RecyclerView.ViewHolder, direction: Int) {\n        TODO(\"Implement Swipe\")\n    }\n}}\n</code></pre>\n\n<p>I hope this helps. Please mark it as answer if it helps you.</p>\n"
                            }],
                            "owner": {
                                "reputation": 50,
                                "user_id": 12824914,
                                "user_type": "registered",
                                "profile_image": "https://lh3.googleusercontent.com/a-/AAuE7mA5p-GiJycYhuC2ch_GmCgUFihVlJl4U2n91qo_TDU=k-s128=k-s128",
                                "display_name": "Aaron DCosta",
                                "link": "https://stackoverflow.com/users/12824914/aaron-dcosta"
                            },
                            "is_answered": false,
                            "view_count": 60,
                            "answer_count": 3,
                            "score": 1,
                            "last_activity_date": 1582381200,
                            "creation_date": 1582290843,
                            "last_edit_date": 1582346089,
                            "question_id": 60339404,
                            "link": "https://stackoverflow.com/questions/60339404/how-to-make-sure-that-not-everyone-can-use-the-itemtouchhelper",
                            "title": "How to make sure that not everyone can use the ItemTouchHelper?",
                            "body": "<p>In my app everyone can add Notes that are displayed in a <code>RecyclerView</code>. </p>\n\n<p>I have added the swipe to delete functionality into the <code>RecyclerView</code>, by creating an <code>ItemTouchHelper</code> with a <code>SimpleCallback</code> and attaching it to the <code>RecyclerView</code> with the <code>attachToRecyclerView</code> method. In the <code>onSwiped</code> callback, I am deleting the corresponding document from the <code>FirestoreDatabase</code>, by calling delete on it’s <code>DocumentReference</code>. This <code>DocumentReference</code> comes from the <code>DocumentSnapshot</code>, by calling <code>getSnapshots().getSnapshot().getReference()</code> in the adapter and passing the position to it. </p>\n\n<p><strong>My issue</strong>: I want the user to be able to only delete the note that he has added and not any other note that was added by some other user. What is the logic to implement this?</p>\n\n<p>NoteAdapter.java (adapterclass)</p>\n\n<pre><code>public @Nullable getItemAtPosition(int position) {\n    if(position != 0 &amp;&amp; position &lt;= items.size) {\n        return items.get(position);\n    } else {\n        return null;\n    }\n}\n\npublic void deleteItem(int position){\n    getSnapshots().getSnapshot(position).getReference().delete();\n}\n</code></pre>\n\n<p>Receive.java (mainactivity)</p>\n\n<pre><code>private void setUpRecyclerView() {\n\n    FirestoreRecyclerOptions&lt;Note&gt; options = new FirestoreRecyclerOptions.Builder&lt;Note&gt;()\n            .setQuery(notebookRef.orderBy(\"time\", Query.Direction.DESCENDING), Note.class)\n            .build();\n    adapter = new NoteAdapter(options);\n    RecyclerView recyclerView = findViewById(R.id.recycler_view);\n    recyclerView.setHasFixedSize(true);\n    recyclerView.setLayoutManager(new LinearLayoutManager(this));\n    recyclerView.setAdapter(adapter);\n\n    new ItemTouchHelper(new ItemTouchHelper.SimpleCallback(0,\n            ItemTouchHelper.LEFT|ItemTouchHelper.RIGHT) {\n        @Override\n        public int getMovementFlags(@NonNull RecyclerView recyclerView, @NonNull RecyclerView.ViewHolder viewHolder) {\n            Note note = new Note();\n            String cuid = FirebaseAuth.getInstance().getCurrentUser().getUid();\n                if (note.getUserId().equals(cuid)) {\n                    //do nothing;\n                } else {\n                    return 0;\n                }\n                return super.getMovementFlags(recyclerView, viewHolder);\n        }\n\n\n        @Override\n        public boolean onMove(@NonNull RecyclerView recyclerView, @NonNull RecyclerView.ViewHolder viewHolder, @NonNull RecyclerView.ViewHolder target) {\n            return false;\n        }\n\n        @Override\n        public void onSwiped(@NonNull RecyclerView.ViewHolder viewHolder, int direction) {\n            adapter.deleteItem(viewHolder.getAdapterPosition());\n        }\n    }).attachToRecyclerView(recyclerView);\n}\n</code></pre>\n\n<p>Note.java (Model class)</p>\n\n<pre><code>package com.example.authenticatorapp.Model;\n\npublic class Note {\n    private String fName;\n    private String Address;\n    private String Details;\n    private String UserId;\n\n    public Note() {\n\n    }\n\n    public Note(String fName,String Address,String Details,String UserId){\n        this.fName    = fName;\n        this.Address = Address;\n        this.Details = Details;\n        this.UserId  = UserId;\n    }\n\n    public String getfName() {\n        return fName;\n    }\n    public String getAddress() {\n        return Address;\n    }\n    public String getDetails() {\n        return Details;\n    }\n    public String getUserId() {\n        return UserId;\n    }\n\n}\n</code></pre>\n"
                        }, {
                            "tags": ["java", "android", "database", "firebase", "google-cloud-firestore"],
                            "answers": [{
                                "owner": {
                                    "reputation": 9,
                                    "user_id": 8899380,
                                    "user_type": "registered",
                                    "profile_image": "https://i.stack.imgur.com/4ZYbH.jpg?s=128&g=1",
                                    "display_name": "Uncle Sam",
                                    "link": "https://stackoverflow.com/users/8899380/uncle-sam"
                                },
                                "is_accepted": false,
                                "score": 0,
                                "last_activity_date": 1582380757,
                                "creation_date": 1582380757,
                                "answer_id": 60353007,
                                "question_id": 60328357,
                                "body": "<p>So I was able to resolve my issues and my code is running fine..All thanks to Alex Mamo</p>\n\n<p>The first thing i had to do was to restructure my onboarding code for both church and user</p>\n\n<p><strong>For Church i have</strong> </p>\n\n<pre><code>  public void onBoardChurchDetails(String church_name, String church_addr, String church_email, String church_leadName, String churchPhone, String church_icon, String churchDescr, String church_regStat, final String uid, String userType) {\n    if (networkInfo != null &amp;&amp; networkInfo.isConnectedOrConnecting() &amp;&amp; networkInfo.isConnected()) {\n        rhemaCollRef = rChurchFireStore.collection(\"rhema_churches\");\n        rhemaHiveChurchSubClass = getRhemaHiveChurchSubClass();\n\n        if (rhemaHiveChurchSubClass.checkChurchEmptyParams(church_icon, church_name, church_addr, churchPhone, church_email, church_leadName, churchDescr, church_regStat, uid, userType) == 1) {\n\n            rhemaHiveChurchModelClass = getChurchModelClass(church_name, church_addr, church_email, church_leadName, churchPhone, church_icon, churchDescr, church_regStat, uid, userType);\n\n            rhemaCollRef.document(uid).set(rhemaHiveChurchModelClass).addOnCompleteListener(new OnCompleteListener&lt;Void&gt;() {\n                @Override\n                public void onComplete(@NonNull Task&lt;Void&gt; task) {\n\n                    if (task.isSuccessful()) {\n                        try {\n                            getAuto().getToast(c, \" Congratulations you Just Registered a new Church\", RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n\n                            bundle.putString(\"church_id\", uid);\n\n                            intent.putExtras(bundle);\n                            startActivity(intent);\n                            //clearChurchDetails();\n                        } catch (NullPointerException np) {\n                            getAuto().getToast(c, RhemaHiveClassReferenceConstants.ERROR_MESSAGE_GENERIC + np.getLocalizedMessage(), RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n                        }\n                    } else {\n                        getAuto().getToast(c, RhemaHiveClassReferenceConstants.ERROR_MESSAGE_GENERIC + task.getException().getLocalizedMessage(), RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n                        startActivity(getAuto().newActivityStarter(c, RhemaHiveChurchPortal.class));\n                    }\n                }\n            }).addOnFailureListener(new OnFailureListener() {\n                @Override\n                public void onFailure(@NonNull Exception e) {\n                    getAuto().getToast(c, RhemaHiveClassReferenceConstants.ERROR_MESSAGE_GENERIC + e.getLocalizedMessage(), RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n                }\n            });\n\n\n        } else {\n\n            getAuto().getToast(c, \"Oops Seems we are missing out some data here\", RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n\n        }\n\n    } else {\n        getAuto().getToast(c, \"Oops Seems No Internet Service is connected\", RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n    }\n}\n</code></pre>\n\n<p>For User Onboarding I have</p>\n\n<pre><code>public void onBoardUserWithoutSocial(String fName, String lName, String gender, String userType, String dob, String regStat, String imgPath, String userEmail, String phone , String about, final String churchName, String branchName, String addr, String city, String country, String postalCode, final String uid) {\n    if (networkInfo != null &amp;&amp; networkInfo.isConnectedOrConnecting() &amp;&amp; networkInfo.isConnected()) {\n        fstore = getFstore();\n    fiReference = fstore.collection(\"rhema_churches\");\n    rhemaHiveUserSubClass = getRhemaHiveUserSubClass();\n\n        if (rhemaHiveUserSubClass.checkEmptyParam(fName, lName, branchName, churchName, addr, country, city, dob, gender, postalCode, regStat, phone,  userType,imgPath,userEmail,about,uid) == 1) {\n            rhemaHiveUserModelClass = getUserModelClass(fName,lName,gender,userType,dob,regStat, imgPath,userEmail,phone,about,churchName,branchName,addr,city,country,postalCode,uid);\n            fiReference.document(uid).set(rhemaHiveUserModelClass).addOnCompleteListener(new OnCompleteListener&lt;Void&gt;() {\n                @Override\n                public void onComplete(@NonNull Task&lt;Void&gt; task) {\n                    if(task.isSuccessful()){\n                        try{\n                        getAuto().getToast(c, \"Congratulation You've onboarded sucessfully..\",RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n                            bundle.putString(\"user_id\", uid);\n                            bundle.putString(\"user_church\",churchName);\n\n                            intent.putExtras(bundle);\n                        startActivity(intent);\n                        clearUserDetails();\n                        }\n                        catch(NullPointerException np){\n                            getAuto().getToast(c, RhemaHiveClassReferenceConstants.ERROR_MESSAGE_GENERIC + np.getLocalizedMessage(),RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n                        }\n\n                    }\n                    else{\n                        getAuto().getToast(c,RhemaHiveClassReferenceConstants.ERROR_MESSAGE_GENERIC + task.getException().getLocalizedMessage(),RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n\n                    }\n                }\n            }).addOnFailureListener(new OnFailureListener() {\n                @Override\n                public void onFailure(@NonNull Exception e) {\n                    getAuto().getToast(c, RhemaHiveClassReferenceConstants.ERROR_MESSAGE_GENERIC + e.getLocalizedMessage(),RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n                }\n            });\n\n        } else {\n            getAuto().getToast(c, \"Oops ! !..Seems we are missing out some of your details\", RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n        }\n\n    }\n\n\n\n\n    else{\n        getAuto().getToast(c, \"Oops ! !..Seems you need to put on your data\", RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n    }\n}\n</code></pre>\n\n<p>So instead of having a collection inside another collection.. I simply had a single collection as rhema_churches and then had an ID for every type of user..</p>\n\n<p>See the structure below</p>\n\n<p><a href=\"https://i.stack.imgur.com/WViWF.jpg\" rel=\"nofollow noreferrer\">New DB Structure</a></p>\n\n<p>With this structure it becomes difficult to login with  more than one provider as each Provider you use is logged as the document id which is easy for retrieval</p>\n\n<p>This is how the new query for User and Church now looks like</p>\n\n<p><strong>For Church Query we have</strong></p>\n\n<pre><code> public void retreiveChurchDetails(String id) throws NullPointerException {\n    if (networkInfo != null &amp;&amp; networkInfo.isConnectedOrConnecting() &amp;&amp; networkInfo.isConnected()) {\n        FirebaseFirestore fS = getFStore();\n        rhemaCollRef = fS.collection(\"rhema_churches\");\n        rhemaCollRef.whereEqualTo(\"church_uid\", id).get().addOnSuccessListener(new OnSuccessListener&lt;QuerySnapshot&gt;() {\n            @Override\n            public void onSuccess(QuerySnapshot queryDocumentSnapshots) {\n                for (DocumentSnapshot documentSnapshot : queryDocumentSnapshots.getDocuments()) {\n                    church_name = documentSnapshot.getString(\"church_name\");\n                    church_email = documentSnapshot.getString(\"church_email\");\n                    church_phone = documentSnapshot.getString(\"church_phone\");\n                    church_pix_link = documentSnapshot.getString(\"church_pix\");\n                    getTextView(R.id.church_retr_name).setText(church_name);\n                    getTextView(R.id.church_retr_email).setText(church_email);\n                    getTextView(R.id.church_retr_phone).setText(church_phone);\n                    ld_wt_gl(c, church_pix_link, 88, 88, getImg(R.id.church_retr_logg));\n\n                }\n            }\n        }).addOnFailureListener(new OnFailureListener() {\n            @Override\n            public void onFailure(@NonNull Exception e) {\n                getAuto().getToast(c, RhemaHiveClassReferenceConstants.ERROR_MESSAGE_GENERIC + e.getLocalizedMessage(), RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n            }\n        });\n    } else {\n        getAuto().getToast(c, \"Oops ! !..Seems we need an internet connection for this\", RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n    }\n\n\n}\n</code></pre>\n\n<p><strong>And then for user query I have</strong> </p>\n\n<pre><code>public void retrUserDet(final String uid) throws NullPointerException{\n    if(networkInfo != null &amp;&amp; networkInfo.isConnectedOrConnecting() &amp;&amp; networkInfo.isConnected()) {\n        FirebaseFirestore fS = getFStore();\n        rhemaCollRef = fS.collection(\"rhema_churches\");\n        rhemaCollRef.whereEqualTo(\"user_uid\",uid).get().addOnSuccessListener(new OnSuccessListener&lt;QuerySnapshot&gt;() {\n            @Override\n            public void onSuccess(QuerySnapshot queryDocumentSnapshots) {\n                if(!queryDocumentSnapshots.getDocuments().isEmpty()){\n                    for(DocumentSnapshot doc : queryDocumentSnapshots.getDocuments()){\n                        user_email = doc.getString(\"user_email\");\n                        user_fName  = doc.getString(\"user_fName\");\n                        user_lName = doc.getString(\"user_lName\");\n\n                        user_phone = doc.getString(\"user_phone\");\n                        user_pix_link = doc.getString(\"user_pix\");\n                        getTex(R.id.user_retr_email).setText(user_email);\n                        getTex(R.id.user_retr_name).setText(retFullName(user_fName,user_lName));\n                        getTex(R.id.user_retr_phone).setText(user_phone);\n                        ld_wt_gl(c,user_pix_link,120,120,getImg(R.id.user_retr_logg));\n\n                    }\n                }\n\n            }\n        });\n\n    }\n}\n</code></pre>\n\n<p>The key take-away is never complicate your database structure too early..for any type of data that goes to my Firestore it has a usertype which can also help me in my filter</p>\n\n<p>Thanks !</p>\n"
                            }],
                            "owner": {
                                "reputation": 9,
                                "user_id": 8899380,
                                "user_type": "registered",
                                "profile_image": "https://i.stack.imgur.com/4ZYbH.jpg?s=128&g=1",
                                "display_name": "Uncle Sam",
                                "link": "https://stackoverflow.com/users/8899380/uncle-sam"
                            },
                            "is_answered": false,
                            "view_count": 38,
                            "answer_count": 1,
                            "score": 1,
                            "last_activity_date": 1582380757,
                            "creation_date": 1582232080,
                            "last_edit_date": 1582233067,
                            "question_id": 60328357,
                            "link": "https://stackoverflow.com/questions/60328357/how-do-i-retreive-a-document-in-firebase-firestore-android-to-match-my-particula",
                            "title": "How do i retreive a document in firebase firestore android to match my particular login credentials",
                            "body": "<p>I have a firebase of this structure below</p>\n\n<p><a href=\"https://i.stack.imgur.com/rLVev.jpg\" rel=\"nofollow noreferrer\">Structure of my Firestore Database</a></p>\n\n<p>It has two users namely a church admin and normal church user</p>\n\n<p>For <strong>Church Admin</strong> this is the code for Registering New Church</p>\n\n<pre><code>public void onBoardChurchDetails(String church_name, String church_addr, String church_email, String church_leadName, String churchPhone, String church_icon, String churchDescr, String church_regStat, final String uid) {\n    if (networkInfo != null &amp;&amp; networkInfo.isConnectedOrConnecting() &amp;&amp; networkInfo.isConnected()) {\n        rhemaCollRef = rChurchFireStore.collection(\"rhema_churches\");\n        rhemaHiveChurchSubClass = getRhemaHiveChurchSubClass();\n\n        if (rhemaHiveChurchSubClass.checkChurchEmptyParams(church_icon, church_name, church_addr, churchPhone, church_email, church_leadName, churchDescr, church_regStat,uid) == 1) {\n\n            rhemaHiveChurchModelClass = getChurchModelClass(church_name, church_addr, church_email, church_leadName, churchPhone, church_icon, churchDescr, church_regStat,uid);\n\n            rhemaCollRef.document(church_name).set(rhemaHiveChurchModelClass).addOnCompleteListener(new OnCompleteListener&lt;Void&gt;() {\n                @Override\n                public void onComplete(@NonNull Task&lt;Void&gt; task) {\n\n                    if (task.isSuccessful()) {\n                        try {\n                            getAuto().getToast(c, \" Congratulations you Just Registered a new Church\", RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n                            intent  = new Intent(c, RhemaHiveChurchPortal.class);\n                            bundle.putString(\"church_id\", uid);\n\n                            intent.putExtras(bundle);\n                            startActivity(intent);\n                            clearChurchDetails();\n                        }\n                        catch(NullPointerException np){\n                            getAuto().getToast(c, RhemaHiveClassReferenceConstants.ERROR_MESSAGE_GENERIC + np.getLocalizedMessage(), RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n                        }\n                    } else {\n                        getAuto().getToast(c, RhemaHiveClassReferenceConstants.ERROR_MESSAGE_GENERIC + task.getException().getLocalizedMessage(), RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n                        startActivity(getAuto().newActivityStarter(c, RhemaHiveChurchPortal.class));\n                    }\n                }\n            }).addOnFailureListener(new OnFailureListener() {\n                @Override\n                public void onFailure(@NonNull Exception e) {\n                    getAuto().getToast(c, RhemaHiveClassReferenceConstants.ERROR_MESSAGE_GENERIC + e.getLocalizedMessage(), RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n                }\n            });\n\n\n        } else {\n\n            getAuto().getToast(c, \"Oops Seems we are missing out some data here\", RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n\n        }\n\n    } else {\n        getAuto().getToast(c, \"Oops Seems No Internet Service is connected\", RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n    }\n}\n</code></pre>\n\n<p>For User Registration I have</p>\n\n<pre><code> public void onBoardUserWithoutSocial(String fName, String lName, String gender, String userType, String dob, String regStat, String imgPath, String userEmail, String phone , String about, final String churchName, String branchName, String addr, String city, String country, String postalCode, final String uid) {\n    if (networkInfo != null &amp;&amp; networkInfo.isConnectedOrConnecting() &amp;&amp; networkInfo.isConnected()) {\n        fstore = getFstore();\n    fiReference = fstore.collection(\"rhema_churches\");\n    rhemaHiveUserSubClass = getRhemaHiveUserSubClass();\n\n        if (rhemaHiveUserSubClass.checkEmptyParam(fName, lName, branchName, churchName, addr, country, city, dob, gender, postalCode, regStat, phone,  userType,imgPath,userEmail,about,uid) == 1) {\n            rhemaHiveUserModelClass = getUserModelClass(fName,lName,gender,userType,dob,regStat, imgPath,userEmail,phone,about,churchName,branchName,addr,city,country,postalCode,uid);\n            fiReference.document(churchName).collection(\"members_data\").document(getFullName(fName,lName)).set(rhemaHiveUserModelClass).addOnCompleteListener(new OnCompleteListener&lt;Void&gt;() {\n                @Override\n                public void onComplete(@NonNull Task&lt;Void&gt; task) {\n                    if(task.isSuccessful()){\n                        try{\n                        getAuto().getToast(c, \"Congratulation You've onboarded sucessfully..\",RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n                            bundle.putString(\"user_id\", uid);\n                            bundle.putString(\"user_church\",churchName);\n\n                            intent.putExtras(bundle);\n                        startActivity(intent);\n                        clearUserDetails();\n                        }\n                        catch(NullPointerException np){\n                            getAuto().getToast(c, RhemaHiveClassReferenceConstants.ERROR_MESSAGE_GENERIC + np.getLocalizedMessage(),RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n                        }\n\n                    }\n                    else{\n                        getAuto().getToast(c,RhemaHiveClassReferenceConstants.ERROR_MESSAGE_GENERIC + task.getException().getLocalizedMessage(),RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n\n                    }\n                }\n            }).addOnFailureListener(new OnFailureListener() {\n                @Override\n                public void onFailure(@NonNull Exception e) {\n                    getAuto().getToast(c, RhemaHiveClassReferenceConstants.ERROR_MESSAGE_GENERIC + e.getLocalizedMessage(),RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n                }\n            });\n\n        } else {\n            getAuto().getToast(c, \"Oops ! !..Seems we are missing out some of your details\", RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n        }\n    }\n    else{\n        getAuto().getToast(c, \"Oops ! !..Seems you need to put on your data\", RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n    }\n}\n</code></pre>\n\n<p>When succesfully registered i want a normal user to be able to login after authentication using any of the providers such as Facebook, Twitter or google, his portal should retreive his personalized portal using a combination of uuid and phone number </p>\n\n<p>for retrieve Church profile see the code below</p>\n\n<pre><code>public void retreiveChurchDetails(String id) throws NullPointerException{\n    if(networkInfo != null &amp;&amp; networkInfo.isConnectedOrConnecting() &amp;&amp; networkInfo.isConnected()) {\n    FirebaseFirestore fS = getFStore();\n    rhemaCollRef = fS.collection(\"rhema_churches\");\n    rhemaCollRef.whereEqualTo(\"church_uid\", id ).get().addOnSuccessListener(new OnSuccessListener&lt;QuerySnapshot&gt;() {\n        @Override\n        public void onSuccess(QuerySnapshot queryDocumentSnapshots) {\n                for(DocumentSnapshot documentSnapshot  : queryDocumentSnapshots.getDocuments()){\n                    church_name = documentSnapshot.getString(\"church_name\");\n                    church_email = documentSnapshot.getString(\"church_email\");\n                    church_phone = documentSnapshot.getString(\"church_phone\");\n                    church_pix_link = documentSnapshot.getString(\"church_pix\");\n                    getTextView(R.id.church_retr_name).setText(church_name);\n                    getTextView(R.id.church_retr_email).setText(church_email);\n                    getTextView(R.id.church_retr_phone).setText(church_phone);\n                    ld_wt_gl(c,church_pix_link,44,44,getImg(R.id.church_retr_logg));\n\n                }\n        }\n    }).addOnFailureListener(new OnFailureListener() {\n        @Override\n        public void onFailure(@NonNull Exception e) {\n            getAuto().getToast(c,RhemaHiveClassReferenceConstants.ERROR_MESSAGE_GENERIC + e.getLocalizedMessage(),RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n        }\n    });\n    }\n\n    else{\n        getAuto().getToast(c, \"Oops ! !..Seems we need an internet connection for this\", RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n    }\n}\n</code></pre>\n\n<p>My question is how do i retrieve user details knowing fully well that to get the user data u have to follow the structure of</p>\n\n<p>rhema_churches = > church_name(needs to identify how to get this) = > document => members_data => user_data</p>\n\n<p>Please refer to database structure attached above</p>\n\n<p>Please kindly help me..</p>\n\n<p>See what i tried anyway</p>\n\n<pre><code> public void retrUserDet(final String uid, String church_name) throws NullPointerException{\n    if(networkInfo != null &amp;&amp; networkInfo.isConnectedOrConnecting() &amp;&amp; networkInfo.isConnected()) {\n        FirebaseFirestore fS = getFStore();\n        rhemaCollRef = fS.collection(\"rhema_churches\");\n        rhemaCollRef.document(church_name).collection(\"members_data\").whereEqualTo(\"user_uid\",uid).get().addOnSuccessListener(new OnSuccessListener&lt;QuerySnapshot&gt;() {\n            @Override\n            public void onSuccess(QuerySnapshot queryDocumentSnapshots) {\n                if(!queryDocumentSnapshots.getDocuments().isEmpty()){\n                    for(DocumentSnapshot doc : queryDocumentSnapshots.getDocuments()){\n                        user_email = doc.getString(\"user_email\");\n                        user_name = doc.getString(\"user_fName\") + doc.getString(\"user_lName\");\n                        user_phone = doc.getString(\"user_phone\");\n                        user_pix_link = doc.getString(\"user_pix\");\n                        getTex(R.id.user_retr_email).setText(user_email);\n                        getTex(R.id.user_retr_name).setText(user_name);\n                        getTex(R.id.user_retr_phone).setText(user_phone);\n                        ld_wt_gl(c,user_pix_link,44,44,getImg(R.id.user_retr_logg));\n\n                    }\n                }\n\n            }\n        });\n\n    }\n}\n</code></pre>\n\n<p>This method above needs two parameters to carry out its query namely uid and churchName</p>\n\n<p>This is the method i tried for retreiving churchName but its not working</p>\n\n<pre><code>  public String retrChurchName(String uid){\n    if (networkInfo != null &amp;&amp; networkInfo.isConnectedOrConnecting() &amp;&amp; networkInfo.isConnected()) {\n        rhemaCollRef = rChurchFireStore.collection(\"rhema_churches\");\n        //rhemaCollRef.\n        rhemaCollRef.whereEqualTo(\"uid\",uid).get().addOnSuccessListener(new OnSuccessListener&lt;QuerySnapshot&gt;() {\n            @Override\n            public void onSuccess(QuerySnapshot queryDocumentSnapshots) {\n                for(DocumentSnapshot documentSnapshot : queryDocumentSnapshots.getDocuments()\n                )\n                {\n                    if(documentSnapshot.exists()){\n                        churchName = documentSnapshot.getString(\"church_name\");\n                    }\n\n                    else{\n                        getAuto().getToast(c,\"Document doesnt exist\", RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n\n                    }\n                }\n            }\n        }).addOnFailureListener(new OnFailureListener() {\n            @Override\n            public void onFailure(@NonNull Exception e) {\n                getAuto().getToast(c,RhemaHiveClassReferenceConstants.ERROR_MESSAGE_GENERIC + e.getLocalizedMessage(), RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n            }\n        });\n\n        return churchName;\n\n    }\n\n    else{\n        getAuto().getToast(c, RhemaHiveClassReferenceConstants.ERROR_MESSAGE_GENERIC + networkInfo.getExtraInfo(), RhemaHiveClassReferenceConstants.TOAST_SHORT_LEN).show();\n    }\n\n    return \"\";\n}\n</code></pre>\n\n<p>Thanks !</p>\n"
                        }, {
                            "tags": ["android", "admob", "ads"],
                            "answers": [{
                                "owner": {
                                    "reputation": 393,
                                    "user_id": 1214403,
                                    "user_type": "registered",
                                    "accept_rate": 53,
                                    "profile_image": "https://www.gravatar.com/avatar/640ee7fbd10f981db9d7d3a51738b993?s=128&d=identicon&r=PG",
                                    "display_name": "venkat",
                                    "link": "https://stackoverflow.com/users/1214403/venkat"
                                },
                                "is_accepted": false,
                                "score": 0,
                                "last_activity_date": 1582378938,
                                "creation_date": 1582378938,
                                "answer_id": 60352737,
                                "question_id": 60264863,
                                "body": "<p>The recent Firebase Analytics library 17.2.2 causing the issue for me. If you are using the Firebase Analytics, you need to revert back to the older version of the Firebase Analytics like 17.2.1 will fix the issue.</p>\n"
                            }],
                            "owner": {
                                "reputation": 350,
                                "user_id": 6276596,
                                "user_type": "registered",
                                "profile_image": "https://graph.facebook.com/10209812458696523/picture?type=large",
                                "display_name": "Furkan Yurdakul",
                                "link": "https://stackoverflow.com/users/6276596/furkan-yurdakul"
                            },
                            "is_answered": false,
                            "view_count": 74,
                            "answer_count": 1,
                            "score": 0,
                            "last_activity_date": 1582378938,
                            "creation_date": 1581950620,
                            "last_edit_date": 1582010358,
                            "question_id": 60264863,
                            "link": "https://stackoverflow.com/questions/60264863/concurrentmodificationexception-in-android-oncreate-com-google-android-measurem",
                            "title": "ConcurrentModificationException in Android.onCreate (com.google.android.measurement.internal)",
                            "body": "<p>This recent crash started happening on across every Android versions within various device manufacturers. I believe it has something to do with either advertisements or one of Google's components.</p>\n\n<p>I opened an issue myself here: <a href=\"https://issuetracker.google.com/issues/149665852\" rel=\"nofollow noreferrer\">https://issuetracker.google.com/issues/149665852</a></p>\n\n<p>Related information about the devices (from 2k users there are 48 exceptions from 43 users so far, happened in 3 days)</p>\n\n<p><a href=\"https://i.stack.imgur.com/f1JRN.png\" rel=\"nofollow noreferrer\"><img src=\"https://i.stack.imgur.com/f1JRN.png\" alt=\"enter image description here\"></a></p>\n\n<p>Stack trace (package name is hidden due to confidentiality):</p>\n\n<pre><code>Caused by java.util.ConcurrentModificationException\n       at androidx.collection.SimpleArrayMap.put + 461(SimpleArrayMap.java:461)\n       at com.google.android.gms.measurement.internal.zzin.zza + 108(zzin.java:108)\n       at com.google.android.gms.measurement.internal.zzid.onActivityCreated + 11(zzid.java:11)\n       at android.app.Application.dispatchActivityCreated + 189(Application.java:189)\n       at android.app.Activity.onCreate + 962(Activity.java:962)\n       at androidx.core.app.ComponentActivity.onCreate + 81(ComponentActivity.java:81)\n       at androidx.activity.ComponentActivity.onCreate + 149(ComponentActivity.java:149)\n       at androidx.fragment.app.FragmentActivity.onCreate + 313(FragmentActivity.java:313)\n       at androidx.appcompat.app.AppCompatActivity.onCreate + 106(AppCompatActivity.java:106)\n       at com.example.myapp.MainActivity.onCreate + 35(MainActivity.java:35)\n       at android.app.Activity.performCreate + 6147(Activity.java:6147)\n       at android.app.Instrumentation.callActivityOnCreate + 1112(Instrumentation.java:1112)\n       at android.app.ActivityThread.performLaunchActivity + 2498(ActivityThread.java:2498)\n       at android.app.ActivityThread.handleLaunchActivity + 2625(ActivityThread.java:2625)\n       at android.app.ActivityThread.access$700 + 183(ActivityThread.java:183)\n       at android.app.ActivityThread$H.handleMessage + 1484(ActivityThread.java:1484)\n       at android.os.Handler.dispatchMessage + 111(Handler.java:111)\n       at android.os.Looper.loop + 194(Looper.java:194)\n       at android.app.ActivityThread.main + 5667(ActivityThread.java:5667)\n       at java.lang.reflect.Method.invoke(Method.java)\n       at java.lang.reflect.Method.invoke + 372(Method.java:372)\n       at com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run + 962(ZygoteInit.java:962)\n       at com.android.internal.os.ZygoteInit.main + 757(ZygoteInit.java:757)\n</code></pre>\n\n<p>Knowledge about the exception: It occurs if a function tries to modify a list while another function is iterating through it. So I guess this is a race condition between two threads or more.</p>\n\n<p>More details:</p>\n\n<p>First of all, we do not use any <code>SimpleArrayMap</code>. So I am sure the exception is not related to our code in any way.</p>\n\n<p>The call to <code>com.example.myapp.MainActivity.onCreate + 35(MainActivity.java:35)</code> this line points to this:</p>\n\n<pre><code>@Override\nprotected void onCreate(Bundle savedInstanceState)\n{\n    super.onCreate(savedInstanceState); // stack trace points here\n\n    // rest of the code\n}\n</code></pre>\n\n<p>The stack trace points to <code>onCreate</code> but the actual responsible one is here (which is at the top of the stack trace):</p>\n\n<pre><code>at androidx.collection.SimpleArrayMap.put + 461(SimpleArrayMap.java:461)\nat com.google.android.gms.measurement.internal.zzin.zza + 108(zzin.java:108)\nat com.google.android.gms.measurement.internal.zzid.onActivityCreated + 11(zzid.java:11)\n</code></pre>\n\n<p>Now, a couple of details: This application uses Firebase Analytics, AdMob with various ad networks such as AppLovin, Ironsource etc... and in app billing. I'm not sure what <code>com.google.android.gms.measurement</code> is exactly, but the source of the exception seems to be coming from there.</p>\n\n<p>From what I understand, this component attaches an object that intercepts activity lifecycles through <a href=\"https://developer.android.com/reference/android/app/Application.ActivityLifecycleCallbacks.html\" rel=\"nofollow noreferrer\">this</a> using <code>Application.registerActivityLifecycleCallbacks</code>. Now, most of the libraries do that but none we use cause an exception like this. So, I am not sure how to intercept and move on with it, because I'm afraid wrapping this to a try-catch doesn't look like a good \"solution\". I'm not even sure if it will resolve the situation because I think another exception will occur after that, such as <code>You must call Activity.onCreate()</code>.</p>\n\n<p>I'm stumped and I don't know what to do besides asking here. The closest thing I've found was <a href=\"https://cnasolution.com/questions/107177/android-crash-on-activity-start-in-com-google-android-gms-measurement-internal\" rel=\"nofollow noreferrer\">this</a> but there are no answers on that either.</p>\n\n<p>If it helps, here are the dependencies we use. (our build.gradle file)</p>\n\n<pre><code>implementation fileTree(dir: 'libs', include: '*.aar')\nimplementation 'com.google.firebase:firebase-core:17.2.1'\nimplementation 'com.google.firebase:firebase-config:19.1.1'\nimplementation 'androidx.appcompat:appcompat:1.1.0'\nimplementation 'androidx.browser:browser:1.2.0'\nimplementation 'androidx.legacy:legacy-support-v13:1.0.0'\nimplementation 'com.google.android.material:material:1.2.0-alpha03'\nimplementation 'androidx.cardview:cardview:1.0.0'\nimplementation 'androidx.recyclerview:recyclerview:1.1.0'\nimplementation 'androidx.annotation:annotation:1.1.0'\nimplementation 'androidx.legacy:legacy-support-v4:1.0.0'\nimplementation 'androidx.constraintlayout:constraintlayout:2.0.0-beta3'\nimplementation 'androidx.preference:preference:1.1.0'\nimplementation 'com.facebook.stetho:stetho:1.5.0'\nimplementation 'com.google.android.gms:play-services-base:17.1.0'\nimplementation 'com.airbnb.android:lottie:3.0.7'\nimplementation 'com.google.android.play:core:1.6.4'\nimplementation 'com.github.anrwatchdog:anrwatchdog:1.4.0'\nimplementation 'com.github.bumptech.glide:glide:4.9.0'\nimplementation 'com.google.android.gms:play-services-ads:18.3.0'\nimplementation 'com.google.android.ads:mediation-test-suite:1.2.2'\nimplementation 'com.squareup.retrofit2:retrofit:2.6.0'\nimplementation 'com.squareup.retrofit2:converter-gson:2.6.0'\nannotationProcessor 'com.github.bumptech.glide:compiler:4.9.0'\nimplementation 'com.google.ads.mediation:applovin:9.8.0.0'\nimplementation 'com.google.ads.mediation:facebook:5.6.0.0'\nimplementation 'com.mopub.volley:mopub-volley:2.1.0'\nimplementation('com.mopub:mopub-sdk:5.7.0@aar') {\n    transitive = true\n    exclude module: 'libAvid-mopub' // To exclude AVID\n    exclude module: 'moat-mobile-app-kit' // To exclude Moat\n}\nimplementation 'com.google.ads.mediation:mopub:5.7.0.0'\nimplementation 'com.google.ads.mediation:inmobi:7.3.0.0'\nimplementation 'com.squareup.picasso:picasso:2.5.2'\nimplementation 'com.google.android.gms:play-services-plus:17.0.0'\nimplementation 'com.google.ads.mediation:tapjoy:12.3.1.0'\nimplementation 'com.unity3d.ads:unity-ads:3.1.0'\nimplementation 'com.google.ads.mediation:unity:3.1.0.0'\n</code></pre>\n\n<p>Any help is appreciated, thank you very much.</p>\n"
                        }, {
                            "tags": ["java", "android", "android-fileprovider"],
                            "answers": [{
                                "owner": {
                                    "reputation": 25,
                                    "user_id": 6477879,
                                    "user_type": "registered",
                                    "profile_image": "https://graph.facebook.com/810600732375334/picture?type=large",
                                    "display_name": "Charles Chung",
                                    "link": "https://stackoverflow.com/users/6477879/charles-chung"
                                },
                                "is_accepted": false,
                                "score": 0,
                                "last_activity_date": 1582319039,
                                "creation_date": 1582319039,
                                "answer_id": 60346187,
                                "question_id": 60332565,
                                "body": "<p>I finally worked it out. Tunes out my URI construction has some problems. I changed it to </p>\n\n<pre class=\"lang-java prettyprint-override\"><code>Context context = getApplicationContext();\nFile filelocation = new File(getFilesDir(), fileName);\nUri path = FileProvider.getUriForFile(context, \"com.example.charleschung.mci_pa1\", filelocation);\n</code></pre>\n\n<p>And it works. Hope it helps :)</p>\n"
                            }, {
                                "owner": {
                                    "reputation": 1,
                                    "user_id": 6924545,
                                    "user_type": "registered",
                                    "profile_image": "https://www.gravatar.com/avatar/5457e5517bd209b36999182d99c66eef?s=128&d=identicon&r=PG&f=1",
                                    "display_name": "alireza rajaei",
                                    "link": "https://stackoverflow.com/users/6924545/alireza-rajaei"
                                },
                                "is_accepted": false,
                                "score": 0,
                                "last_activity_date": 1582378903,
                                "creation_date": 1582378903,
                                "answer_id": 60352731,
                                "question_id": 60332565,
                                "body": "<p>first of all you should to check build version code</p>\n\n<pre><code>if (Build.VERSION.SDK_INT &gt;= Build.VERSION_CODES.N) {\n                        intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);\n                        Uri path = FileProvider.getUriForFile(this,getApplicationContext().getPackageName() +  \".FileProvider\", new File(filePath + fileName)); \n\n                    } else{\n                        Uri path =Uri.fromFile(new File(filePath + fileName)) \n                    }\n</code></pre>\n\n<p>i hope its helpfull</p>\n"
                            }],
                            "owner": {
                                "reputation": 25,
                                "user_id": 6477879,
                                "user_type": "registered",
                                "profile_image": "https://graph.facebook.com/810600732375334/picture?type=large",
                                "display_name": "Charles Chung",
                                "link": "https://stackoverflow.com/users/6477879/charles-chung"
                            },
                            "is_answered": false,
                            "view_count": 90,
                            "answer_count": 2,
                            "score": 2,
                            "last_activity_date": 1582378903,
                            "creation_date": 1582261993,
                            "last_edit_date": 1582270454,
                            "question_id": 60332565,
                            "link": "https://stackoverflow.com/questions/60332565/android-10-file-provider-permission-denial-reading-android-support-v4-conte",
                            "title": "Android 10 - file provider - permission denial: reading android.support.v4.content.FileProvider uri",
                            "body": "<p>I've tried to generate a CSV file (of Accelerometer), save it to my <code>Context.getFilesDir()</code>, and then use FileProvider to share it to Google Drive.</p>\n\n<p>The problem is when I try to share it, error <code>Writing exception to parcel</code>, <code>java.lang.SecurityException: Permission Denial: reading android.support.v4.content.FileProvider uri content://...csv requires the provider be exported, or grantUriPermission()</code> keeps occurring. </p>\n\n<p>I had... </p>\n\n<ol>\n<li>Added <code>grantUriPermission()</code> and <code>Intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)</code> as others suggests.</li>\n<li>I tried to write to <code>Environment.getExternalStorageDirectory()</code>, but it doesn't work since my phone doesn't have external storage.</li>\n<li>I can not export the provider because it raises an error as well.</li>\n</ol>\n\n<p>What can I do then? Or is that a better way to generate and share a CSV file? Any suggestions would be grateful. Thank you, guys.</p>\n\n<p>Code Snippet for now</p>\n\n<p>In AndroidManifest.xml:</p>\n\n<pre class=\"lang-xml prettyprint-override\"><code>    &lt;application...&gt;\n        ...\n\n        &lt;provider\n            android:name=\"android.support.v4.content.FileProvider\"\n            android:grantUriPermissions=\"true\"\n            android:authorities=\"com.example.FileProvider\"\n            android:exported=\"false\"&gt;\n            &lt;meta-data\n                android:name=\"android.support.FILE_PROVIDER_PATHS\"\n                android:resource=\"@xml/provider_paths\"/&gt;\n        &lt;/provider&gt;\n\n    &lt;/application&gt;\n</code></pre>\n\n<p>In provider_path.xml</p>\n\n<pre class=\"lang-xml prettyprint-override\"><code>&lt;?xml version=\"1.0\" encoding=\"utf-8\"?&gt;\n&lt;paths xmlns:android=\"http://schemas.android.com/apk/res/android\"&gt;\n    &lt;files-path name=\"files\" path=\".\"/&gt;\n&lt;/paths&gt;\n</code></pre>\n\n<p>In mainActivity.java</p>\n\n<pre class=\"lang-java prettyprint-override\"><code>    private void onShareCSV() {\n\n        Uri path = FileProvider.getUriForFile(this, \"com.example.FileProvider\", new File(filePath + fileName));\n\n        Log.d(TAG, \"onShareCSV: \" + path);\n        Intent shareIntent = new Intent(\"com.example.FileProvider\").setData(path);\n\n        List&lt;ResolveInfo&gt; resInfoList = getPackageManager().queryIntentActivities(shareIntent, PackageManager.MATCH_DEFAULT_ONLY);\n        for (ResolveInfo resolveInfo : resInfoList) {\n            String packageName = resolveInfo.activityInfo.packageName;\n            getApplicationContext().grantUriPermission(packageName, path, Intent.FLAG_GRANT_READ_URI_PERMISSION);\n        }\n\n        shareIntent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);\n        shareIntent.setAction(Intent.ACTION_SEND);\n        shareIntent.putExtra(Intent.EXTRA_TEXT, \"This is a CSV I'm sharing.\");\n        shareIntent.putExtra(Intent.EXTRA_STREAM, path);\n        shareIntent.setType(\"text/csv\");\n        startActivity(Intent.createChooser(shareIntent, \"Share...\"));\n        this.setResult(RESULT_OK, shareIntent);\n    }\n</code></pre>\n\n<p>And here is the error</p>\n\n<pre><code>2020-02-20 23:45:02.751 21484-21503/com.example.charleschung.mci_pa1 E/DatabaseUtils: Writing exception to parcel\n    java.lang.SecurityException: Permission Denial: reading android.support.v4.content.FileProvider uri content://com.example.FileProvider/files/sensor-1582260302226.csv from pid=21581, uid=1000 requires the provider be exported, or grantUriPermission()\n        at android.content.ContentProvider.enforceReadPermissionInner(ContentProvider.java:729)\n        at android.content.ContentProvider$Transport.enforceReadPermission(ContentProvider.java:602)\n        at android.content.ContentProvider$Transport.query(ContentProvider.java:231)\n        at android.content.ContentProviderNative.onTransact(ContentProviderNative.java:104)\n        at android.os.Binder.execTransactInternal(Binder.java:1021)\n        at android.os.Binder.execTransact(Binder.java:994)\n</code></pre>\n"
                        }, {
                            "tags": ["php", "android", "json", "image", "file-upload"],
                            "answers": [{
                                "comments": [{
                                    "owner": {
                                        "reputation": 2007,
                                        "user_id": 3724800,
                                        "user_type": "registered",
                                        "accept_rate": 76,
                                        "profile_image": "https://i.stack.imgur.com/oyaPb.png?s=128&g=1",
                                        "display_name": "xscoder",
                                        "link": "https://stackoverflow.com/users/3724800/xscoder"
                                    },
                                    "edited": false,
                                    "score": 0,
                                    "creation_date": 1582300080,
                                    "post_id": 60342042,
                                    "comment_id": 106741682,
                                    "body": "Thanks, but I can&#39;t edit my php script, I&#39;ve forgot to mention it in my question, because I also have a PHP and iOS SDK that calls that file the way it is and it works fine, so I must edit my Java code only"
                                }, {
                                    "owner": {
                                        "reputation": 322,
                                        "user_id": 8280010,
                                        "user_type": "registered",
                                        "profile_image": "https://www.gravatar.com/avatar/2726390eedccc6ff18cc60ef83ba8626?s=128&d=identicon&r=PG&f=1",
                                        "display_name": "DroidDev",
                                        "link": "https://stackoverflow.com/users/8280010/droiddev"
                                    },
                                    "reply_to_user": {
                                        "reputation": 2007,
                                        "user_id": 3724800,
                                        "user_type": "registered",
                                        "accept_rate": 76,
                                        "profile_image": "https://i.stack.imgur.com/oyaPb.png?s=128&g=1",
                                        "display_name": "xscoder",
                                        "link": "https://stackoverflow.com/users/3724800/xscoder"
                                    },
                                    "edited": false,
                                    "score": 0,
                                    "creation_date": 1582300567,
                                    "post_id": 60342042,
                                    "comment_id": 106741964,
                                    "body": "@xscoder without the extension how ios displays the image?"
                                }, {
                                    "owner": {
                                        "reputation": 2007,
                                        "user_id": 3724800,
                                        "user_type": "registered",
                                        "accept_rate": 76,
                                        "profile_image": "https://i.stack.imgur.com/oyaPb.png?s=128&g=1",
                                        "display_name": "xscoder",
                                        "link": "https://stackoverflow.com/users/3724800/xscoder"
                                    },
                                    "edited": false,
                                    "score": 0,
                                    "creation_date": 1582300714,
                                    "post_id": 60342042,
                                    "comment_id": 106742048,
                                    "body": "Because in a similar Swift function, this is what I use: <code>body.append(&quot;\\(fileName)\\r\\n&quot;.data(using: String.Encoding.utf8)!)</code> AND <code>if fileName.hasSuffix(&quot;.jpg&quot;) {             body.append(&quot;Content-Type:image&#47;png\\r\\n\\r\\n&quot;.data(using: String.Encoding.utf8)!)</code>. So my http request sends the file data + the file name String, and the complete file name becomes <code>randomChars_image.jpg</code>. I must do a similar job to my Android code as well"
                                }, {
                                    "owner": {
                                        "reputation": 322,
                                        "user_id": 8280010,
                                        "user_type": "registered",
                                        "profile_image": "https://www.gravatar.com/avatar/2726390eedccc6ff18cc60ef83ba8626?s=128&d=identicon&r=PG&f=1",
                                        "display_name": "DroidDev",
                                        "link": "https://stackoverflow.com/users/8280010/droiddev"
                                    },
                                    "reply_to_user": {
                                        "reputation": 2007,
                                        "user_id": 3724800,
                                        "user_type": "registered",
                                        "accept_rate": 76,
                                        "profile_image": "https://i.stack.imgur.com/oyaPb.png?s=128&g=1",
                                        "display_name": "xscoder",
                                        "link": "https://stackoverflow.com/users/3724800/xscoder"
                                    },
                                    "edited": false,
                                    "score": 0,
                                    "creation_date": 1582301028,
                                    "post_id": 60342042,
                                    "comment_id": 106742232,
                                    "body": "@xscoder what all are the extensions you are uploading in php file?"
                                }, {
                                    "owner": {
                                        "reputation": 2007,
                                        "user_id": 3724800,
                                        "user_type": "registered",
                                        "accept_rate": 76,
                                        "profile_image": "https://i.stack.imgur.com/oyaPb.png?s=128&g=1",
                                        "display_name": "xscoder",
                                        "link": "https://stackoverflow.com/users/3724800/xscoder"
                                    },
                                    "edited": false,
                                    "score": 0,
                                    "creation_date": 1582302374,
                                    "post_id": 60342042,
                                    "comment_id": 106743061,
                                    "body": "mainly jpg, png and mp4, but i can upload any file since i append its name and extension from my code."
                                }, {
                                    "owner": {
                                        "reputation": 322,
                                        "user_id": 8280010,
                                        "user_type": "registered",
                                        "profile_image": "https://www.gravatar.com/avatar/2726390eedccc6ff18cc60ef83ba8626?s=128&d=identicon&r=PG&f=1",
                                        "display_name": "DroidDev",
                                        "link": "https://stackoverflow.com/users/8280010/droiddev"
                                    },
                                    "reply_to_user": {
                                        "reputation": 2007,
                                        "user_id": 3724800,
                                        "user_type": "registered",
                                        "accept_rate": 76,
                                        "profile_image": "https://i.stack.imgur.com/oyaPb.png?s=128&g=1",
                                        "display_name": "xscoder",
                                        "link": "https://stackoverflow.com/users/3724800/xscoder"
                                    },
                                    "edited": false,
                                    "score": 0,
                                    "creation_date": 1582304005,
                                    "post_id": 60342042,
                                    "comment_id": 106743906,
                                    "body": "can you use this function <code>public Optional&lt;String&gt; getExtensionByStringHandling(String filename) {     return Optional.ofNullable(filename)       .filter(f -&gt; f.contains(&quot;.&quot;))       .map(f -&gt; f.substring(filename.lastIndexOf(&quot;.&quot;) + 1)); }</code>"
                                }, {
                                    "owner": {
                                        "reputation": 2007,
                                        "user_id": 3724800,
                                        "user_type": "registered",
                                        "accept_rate": 76,
                                        "profile_image": "https://i.stack.imgur.com/oyaPb.png?s=128&g=1",
                                        "display_name": "xscoder",
                                        "link": "https://stackoverflow.com/users/3724800/xscoder"
                                    },
                                    "edited": false,
                                    "score": 0,
                                    "creation_date": 1582309213,
                                    "post_id": 60342042,
                                    "comment_id": 106746294,
                                    "body": "please update your answer and show me how to use that function"
                                }, {
                                    "owner": {
                                        "reputation": 322,
                                        "user_id": 8280010,
                                        "user_type": "registered",
                                        "profile_image": "https://www.gravatar.com/avatar/2726390eedccc6ff18cc60ef83ba8626?s=128&d=identicon&r=PG&f=1",
                                        "display_name": "DroidDev",
                                        "link": "https://stackoverflow.com/users/8280010/droiddev"
                                    },
                                    "reply_to_user": {
                                        "reputation": 2007,
                                        "user_id": 3724800,
                                        "user_type": "registered",
                                        "accept_rate": 76,
                                        "profile_image": "https://i.stack.imgur.com/oyaPb.png?s=128&g=1",
                                        "display_name": "xscoder",
                                        "link": "https://stackoverflow.com/users/3724800/xscoder"
                                    },
                                    "edited": false,
                                    "score": 0,
                                    "creation_date": 1582339956,
                                    "post_id": 60342042,
                                    "comment_id": 106754594,
                                    "body": "@xscoder kindly check my updated answer."
                                }, {
                                    "owner": {
                                        "reputation": 2007,
                                        "user_id": 3724800,
                                        "user_type": "registered",
                                        "accept_rate": 76,
                                        "profile_image": "https://i.stack.imgur.com/oyaPb.png?s=128&g=1",
                                        "display_name": "xscoder",
                                        "link": "https://stackoverflow.com/users/3724800/xscoder"
                                    },
                                    "edited": false,
                                    "score": 0,
                                    "creation_date": 1582360834,
                                    "post_id": 60342042,
                                    "comment_id": 106757618,
                                    "body": "Thanks for your effort, but it doesn&#39;t work, no file name added :("
                                }],
                                "owner": {
                                    "reputation": 322,
                                    "user_id": 8280010,
                                    "user_type": "registered",
                                    "profile_image": "https://www.gravatar.com/avatar/2726390eedccc6ff18cc60ef83ba8626?s=128&d=identicon&r=PG&f=1",
                                    "display_name": "DroidDev",
                                    "link": "https://stackoverflow.com/users/8280010/droiddev"
                                },
                                "is_accepted": false,
                                "score": 1,
                                "last_activity_date": 1582339710,
                                "last_edit_date": 1582339710,
                                "creation_date": 1582299898,
                                "answer_id": 60342042,
                                "question_id": 60341904,
                                "body": "<p>You need to get the extension from the uploaded file. see the below code.</p>\n\n<pre><code>$filename = $_FILES[\"file\"][\"name\"];\n$file_extension = end((explode(\".\", $filename)));\n$filePath = 'uploads/' . $randomStr.$file_extension;\nmove_uploaded_file($_FILES[\"file\"][\"tmp_name\"], $filePath);\n</code></pre>\n\n<p><strong>EDIT</strong></p>\n\n<p>@xscoder could not edit the php, so I am giving the function in java which return the file extension when you pass filename to that.</p>\n\n<pre><code>private static String getFileExtension(String fileName) {\n        if(fileName.lastIndexOf(\".\") != -1 &amp;&amp; fileName.lastIndexOf(\".\") != 0)\n        return fileName.substring(fileName.lastIndexOf(\".\")+1);\n        else return \"\";\n}\n</code></pre>\n\n<p>you can edit this line as</p>\n\n<pre><code>dos.writeBytes(\"Content-Disposition: form-data; name='file';fileName='\" + sourceFileUri + \"'\" + fileName +\".\"+ getFileExtension(fileName) +\"\\\"\" + lineEnd);\n</code></pre>\n\n<p>NOTE: while using file in java you need to include this line <code>import java.io.File;</code></p>\n"
                            }, {
                                "owner": {
                                    "reputation": 2007,
                                    "user_id": 3724800,
                                    "user_type": "registered",
                                    "accept_rate": 76,
                                    "profile_image": "https://i.stack.imgur.com/oyaPb.png?s=128&g=1",
                                    "display_name": "xscoder",
                                    "link": "https://stackoverflow.com/users/3724800/xscoder"
                                },
                                "is_accepted": false,
                                "score": 0,
                                "last_activity_date": 1582377684,
                                "creation_date": 1582377684,
                                "answer_id": 60352567,
                                "question_id": 60341904,
                                "body": "<p>I've found a solution by getting inspired from my Swift code, I had to add this code in my <code>upload</code> function:</p>\n\n<pre><code>dos.writeBytes(twoHyphens + boundary + lineEnd);\n            dos.writeBytes(\"Content-Disposition: form-data; name=\\\"fileName\\\"\\r\\n\\r\\n\" +\n                    fileName + \"\\r\\n\" +\n                    \"--\" + boundary + \"\\r\\n\" +\n                    \"Content-Disposition: form-data; name=\\\"file\\\"; filename=\\\"file\\\"\\r\\n\"\n\n            );\n</code></pre>\n\n<p>So, the final Java function now looks like this:</p>\n\n<pre><code> public static void upload(String sourceFileUri, String fileName, Activity act, final XSFileHandler handler) {\n         HttpURLConnection conn;\n         DataOutputStream dos;\n         String lineEnd = \"\\r\\n\";\n         String twoHyphens = \"--\";\n         String boundary = \"*****\";\n         final int code;\n         int bytesRead, bytesAvailable, bufferSize;\n         byte[] buffer;\n         int maxBufferSize = 1024*1024;\n         File sourceFile = new File(sourceFileUri);\n\n         StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();\n         StrictMode.setThreadPolicy(policy);\n\n         try {\n               FileInputStream fileInputStream = new FileInputStream(sourceFile);\n               URL url = new URL(DATABASE_PATH + \"upload-file.php\");\n\n               conn = (HttpURLConnection) url.openConnection();\n               conn.setDoInput(true);\n               conn.setDoOutput(true);\n               conn.setUseCaches(false);\n               conn.setRequestMethod(\"POST\");\n               conn.setRequestProperty(\"Connection\", \"Keep-Alive\");\n               conn.setRequestProperty(\"ENCTYPE\", \"multipart/form-data\");\n               conn.setRequestProperty(\"Content-Type\", \"multipart/form-data;boundary=\" + boundary);\n               conn.setRequestProperty(\"file\", sourceFileUri);\n               dos = new DataOutputStream(conn.getOutputStream());\n               dos.writeBytes(twoHyphens + boundary + lineEnd);\n\n            /* HERE'S THE MAGIC CODE :) */\n            dos.writeBytes(twoHyphens + boundary + lineEnd);\n            dos.writeBytes(\"Content-Disposition: form-data; name=\\\"fileName\\\"\\r\\n\\r\\n\" +\n                    fileName + \"\\r\\n\" +\n                    \"--\" + boundary + \"\\r\\n\" +\n                    \"Content-Disposition: form-data; name=\\\"file\\\"; filename=\\\"file\\\"\\r\\n\"\n\n            );\n\n\n               dos.writeBytes(lineEnd);\n               bytesAvailable = fileInputStream.available();\n               bufferSize = Math.min(bytesAvailable, maxBufferSize);\n               buffer = new byte[bufferSize];\n               bytesRead = fileInputStream.read(buffer, 0, bufferSize);\n               while (bytesRead &gt; 0) {\n                  dos.write(buffer, 0, bufferSize);\n                  bytesAvailable = fileInputStream.available();\n                  bufferSize = Math.min(bytesAvailable, maxBufferSize);\n                  bytesRead = fileInputStream.read(buffer, 0, bufferSize);\n               }\n               dos.writeBytes(lineEnd);\n               dos.writeBytes(twoHyphens + boundary + twoHyphens + lineEnd);\n               code = conn.getResponseCode();\n\n               if (code == HttpURLConnection.HTTP_OK) {\n                  final HttpURLConnection finalConn = conn;\n                  act.runOnUiThread(new Runnable() {\n                     public void run() {\n                        InputStream responseStream = null;\n                        try {\n                           responseStream = new BufferedInputStream(finalConn.getInputStream());\n                           BufferedReader responseStreamReader = new BufferedReader(new InputStreamReader(responseStream));\n                           String line;\n                           StringBuilder stringBuilder = new StringBuilder();\n                           int i = 0;\n                           while ((line = responseStreamReader.readLine()) != null) {\n                              if (i != 0) { stringBuilder.append(\"\\n\"); }\n                              stringBuilder.append(line);\n                              i++;\n                           }\n                           responseStreamReader.close();\n                           String response = stringBuilder.toString();\n                           responseStream.close();\n                           finalConn.disconnect();\n                           // Log.i(TAG, \"XSUploadFile -&gt; \" + response);\n\n                           if (response != null) { handler.done(DATABASE_PATH + response, null);\n                           } else { handler.done(null, E_401); }\n\n                        // error\n                        } catch (IOException e) { e.printStackTrace(); handler.done(null, XS_ERROR); }\n                     }});\n\n               // Bad response from sever\n               } else { act.runOnUiThread(new Runnable() {\n                     public void run() { handler.done(null, XS_ERROR); }}); }\n               fileInputStream.close();\n               dos.flush();\n               dos.close();\n\n         // No response from server\n         } catch (final Exception ex) {\n            act.runOnUiThread(new Runnable() {\n               public void run() { handler.done(null, XS_ERROR); }});\n         }\n   }\n</code></pre>\n"
                            }],
                            "owner": {
                                "reputation": 2007,
                                "user_id": 3724800,
                                "user_type": "registered",
                                "accept_rate": 76,
                                "profile_image": "https://i.stack.imgur.com/oyaPb.png?s=128&g=1",
                                "display_name": "xscoder",
                                "link": "https://stackoverflow.com/users/3724800/xscoder"
                            },
                            "is_answered": true,
                            "view_count": 28,
                            "answer_count": 2,
                            "score": 0,
                            "last_activity_date": 1582377684,
                            "creation_date": 1582299346,
                            "last_edit_date": 1582300145,
                            "question_id": 60341904,
                            "link": "https://stackoverflow.com/questions/60341904/android-how-to-add-file-name-to-an-upload-file-function-that-calls-a-php-file",
                            "title": "Android - How to add file name to an upload file function that calls a PHP file",
                            "body": "<p>I have the following Java code in my Android app - in a Java class that extends <code>Application</code>:</p>\n\n<pre><code>public static void XSUploadFile(final String filePath, final String fileName, final Activity act, final XSFileHandler handler) {\n      new Thread(new Runnable() {\n         public void run() {\n            upload(filePath, fileName, act, handler);\n         }\n      }).start();\n   }\n   public interface XSFileHandler { void done(String fileURL, String error); }\n   public static void upload(String sourceFileUri, String fileName, Activity act, final XSFileHandler handler) {\n         HttpURLConnection conn;\n         DataOutputStream dos;\n         String lineEnd = \"\\r\\n\";\n         String twoHyphens = \"--\";\n         String boundary = \"*****\";\n         final int code;\n         int bytesRead, bytesAvailable, bufferSize;\n         byte[] buffer;\n         int maxBufferSize = 1024*1024;\n         File sourceFile = new File(sourceFileUri);\n         try {\n               FileInputStream fileInputStream = new FileInputStream(sourceFile);\n               URL url = new URL(DATABASE_PATH + \"upload-file.php\");\n\n               conn = (HttpURLConnection) url.openConnection();\n               conn.setDoInput(true); // Allow Inputs\n               conn.setDoOutput(true); // Allow Outputs\n\n               conn.setUseCaches(false); // Don't use a Cached Copy\n               conn.setRequestMethod(\"POST\");\n               conn.setRequestProperty(\"Connection\", \"Keep-Alive\");\n               conn.setRequestProperty(\"ENCTYPE\", \"multipart/form-data\");\n               conn.setRequestProperty(\"Content-Type\", \"multipart/form-data;boundary=\" + boundary);\n               conn.setRequestProperty(\"file\", sourceFileUri);\n               dos = new DataOutputStream(conn.getOutputStream());\n               dos.writeBytes(twoHyphens + boundary + lineEnd);\n\n               dos.writeBytes(\"Content-Disposition: form-data; name='file';fileName='\" + sourceFileUri + \"'\" + fileName + \"\\\"\" + lineEnd);\n\n               dos.writeBytes(lineEnd);\n               bytesAvailable = fileInputStream.available();\n               bufferSize = Math.min(bytesAvailable, maxBufferSize);\n               buffer = new byte[bufferSize];\n               bytesRead = fileInputStream.read(buffer, 0, bufferSize);\n               while (bytesRead &gt; 0) {\n                  dos.write(buffer, 0, bufferSize);\n                  bytesAvailable = fileInputStream.available();\n                  bufferSize = Math.min(bytesAvailable, maxBufferSize);\n                  bytesRead = fileInputStream.read(buffer, 0, bufferSize);\n               }\n               dos.writeBytes(lineEnd);\n               dos.writeBytes(twoHyphens + boundary + twoHyphens + lineEnd);\n               code = conn.getResponseCode();\n\n               if (code == HttpURLConnection.HTTP_OK) {\n                  final HttpURLConnection finalConn = conn;\n                  act.runOnUiThread(new Runnable() {\n                     public void run() {\n                        InputStream responseStream = null;\n                        try {\n                           responseStream = new BufferedInputStream(finalConn.getInputStream());\n                           BufferedReader responseStreamReader = new BufferedReader(new InputStreamReader(responseStream));\n                           String line;\n                           StringBuilder stringBuilder = new StringBuilder();\n                           int i = 0;\n                           while ((line = responseStreamReader.readLine()) != null) {\n                              if (i != 0) { stringBuilder.append(\"\\n\"); }\n                              stringBuilder.append(line);\n                              i++;\n                           }\n                           responseStreamReader.close();\n                           String response = stringBuilder.toString();\n                           responseStream.close();\n                           finalConn.disconnect();\n                           // Log.i(TAG, \"XSUploadFile -&gt; \" + response);\n\n                           if (response != null) { handler.done(DATABASE_PATH + response, null);\n                           } else { handler.done(null, E_401); }\n\n                        // error\n                        } catch (IOException e) { e.printStackTrace(); handler.done(null, XS_ERROR); }\n                     }});\n\n               // Bad response from sever\n               } else {\n                  act.runOnUiThread(new Runnable() {\n                     public void run() { handler.done(null, XS_ERROR); }});\n               }\n               fileInputStream.close();\n               dos.flush();\n               dos.close();\n\n         // No response from server\n         } catch (final Exception ex) {\n            act.runOnUiThread(new Runnable() {\n               public void run() { handler.done(null, XS_ERROR); }});\n         }\n   }\n</code></pre>\n\n<p>I call it as it follows:</p>\n\n<pre><code>   // Get demo image path\n   Bitmap bmp = BitmapFactory.decodeResource(getResources(), R.drawable.demo_img);\n   final String filePath = getRealPathFromURI(getImageUri(bmp, ctx), ctx);\n\n    XSUploadFile(filePath, \"image.jpg\", (Activity)ctx, new XServerSDK.XSFileHandler() {\n        @Override\n        public void done(String fileURL, String e) {\n            if (fileURL != null) {\n                hideHUD();\n                Log.i(\"log-\", \"Uploaded FileURL: \" + fileURL);\n            }\n    }});\n</code></pre>\n\n<p>And this is my <code>upload-file.php</code> script:</p>\n\n<pre><code>&lt;?php include '_config.php';\n\nif ($_FILES[\"file\"][\"error\"] &gt; 0) {\n    echo \"Error: \" .$_FILES[\"file\"][\"error\"]. \"&lt;br&gt;\";\n\n} else {\n    // Check file size\n    if ($_FILES[\"file\"][\"size\"] &gt; 20485760) { // 20 MB\n        echo \"ERROR: Your file is larger than 20 MB. Please upload a smaller one.\";    \n    } else { uploadImage(); }\n\n}// ./ If\n\n\n// UPLOAD IMAGE ------------------------------------------\nfunction uploadImage() {\n    // generate a unique random string\n    $randomStr = generateRandomString();\n    $filePath = \"uploads/\".$randomStr;\n\n    // upload image into the 'uploads' folder\n    move_uploaded_file($_FILES['file']['tmp_name'], $filePath);\n\n    // echo the link of the uploaded image\n    echo $filePath;\n}\n\n// GENERATE A RANDOM STRING ---------------------------------------\nfunction generateRandomString() {\n    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';\n    $charactersLength = strlen($characters);\n    $randomString = '';\n    for ($i = 0; $i&lt;20; $i++) {\n        $randomString .= $characters[rand(0, $charactersLength - 1)];\n    }\n    return $randomString.\"_\".$_POST['fileName'];\n}\n?&gt;\n</code></pre>\n\n<p>The result I get in the Logcat is this one:</p>\n\n<pre><code>Uploaded FileURL: https://xscoder.com/xserver/uploads/mocpWfxIvtRAacnk1lTV_\n</code></pre>\n\n<p>What I need to do is to append the \"image.jpg\" to the end of that URL, so the final result should be like:</p>\n\n<pre><code>Uploaded FileURL: https://xscoder.com/xserver/uploads/mocpWfxIvtRAacnk1lTV_image.jpg\n</code></pre>\n\n<p>I assume it can be done in my XSUploadFile() function in my java class, maybe by editing this line:</p>\n\n<pre><code>dos.writeBytes(\"Content-Disposition: form-data; name='file';fileName='\" + sourceFileUri + \"'\" + fileName + \"\\\"\" + lineEnd);\n</code></pre>\n\n<p>I've tried a few editing but no success at all, any help will be greatly appreciated.</p>\n\n<p><strong>Please note that I cannot edit the PHP script, I have a PHP and iOS SDK that both call that script and work fine, so I must edit only the Android Java code.</strong></p>\n"
                        }, {
                            "tags": ["php", "android", "string", "binary"],
                            "answers": [{
                                "owner": {
                                    "reputation": 57,
                                    "user_id": 8422658,
                                    "user_type": "registered",
                                    "profile_image": "https://i.stack.imgur.com/C0oY5.jpg?s=128&g=1",
                                    "display_name": "Sagan",
                                    "link": "https://stackoverflow.com/users/8422658/sagan"
                                },
                                "is_accepted": false,
                                "score": 0,
                                "last_activity_date": 1582375026,
                                "creation_date": 1582375026,
                                "answer_id": 60352209,
                                "question_id": 60280363,
                                "body": "<p>So I found out that there are some encodings that can be used in this case, those who will preserve the bytes as they are so we could go with ISO 8859-1.</p>\n\n<p>This needs verification but according to the docs it should be fine. 1 to 1 conversion and no data loss.</p>\n\n<p>Anyways we could also use the BASE64 encoding as @vivek_23 mentioned in the comments. But this adds bytes to the overal length.</p>\n\n<p>So it is up to us. But it seems that a simple 1:1 byte to string conversion is possible.</p>\n"
                            }],
                            "owner": {
                                "reputation": 57,
                                "user_id": 8422658,
                                "user_type": "registered",
                                "profile_image": "https://i.stack.imgur.com/C0oY5.jpg?s=128&g=1",
                                "display_name": "Sagan",
                                "link": "https://stackoverflow.com/users/8422658/sagan"
                            },
                            "is_answered": false,
                            "view_count": 44,
                            "answer_count": 1,
                            "score": 0,
                            "last_activity_date": 1582375026,
                            "creation_date": 1582026958,
                            "last_edit_date": 1582079473,
                            "question_id": 60280363,
                            "link": "https://stackoverflow.com/questions/60280363/what-encoding-to-use-to-send-binary-data-as-a-string-to-a-server",
                            "title": "What encoding to use to send binary data as a string to a server?",
                            "body": "<p>I want to send binary data to my server from an android app as a string.</p>\n\n<p>What is the best/proper way to get the bytes correct and characters recognized in php and assigned the correct byte value ?</p>\n\n<p>So what I would like to know is how to do:</p>\n\n<pre><code>Java byte array -&gt; string(same length) -&gt; php byte array.. \n</code></pre>\n"
                        }], "has_more": true, "quota_max": 300, "quota_remaining": 212
                    }
                    $scope.questions = $scope.questions.items;
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
                'page': 1,
                'pageSize': 10,
                'fromdate': null,
                'todate': null,
                'sort': $scope.sortType,
                'tags': [],
                'filter': null,
            };
        }

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
